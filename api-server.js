<<<<<<< Updated upstream
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const authConfig = require("./src/auth_config.json");
=======
onst express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const dotenv = require('dotenv');
>>>>>>> Stashed changes

dotenv.config();

const { DOMAIN, AUDIENCE, PORT = 3001 } = process.env;

const app = express();

if (!DOMAIN || !AUDIENCE) {
  throw new Error(
<<<<<<< Updated upstream
    "Please make sure that auth_config.json is in place and populated"
  );
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your access token was successfully validated!"
  });
=======
    'Please make sure that DOMAIN and AUDIENCE is set in your .env file'
  );
}

app.use(cors()); // Allow all cors (not recommended for production)

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: `https://${DOMAIN}/.well-known/jwks.json`,
  }),
  audience: AUDIENCE,
  issuer: `https://${DOMAIN}/`,
  algorithms: ['RS256'],
});

app.head('/', (req, res) => res.send('ok'));

app.get('/users', checkJwt, jwtAuthz(['read:users']), (req, res) => {
  res.send([
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Alice', email: 'alice@example.com' },
  ]);
>>>>>>> Stashed changes
});

app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`));