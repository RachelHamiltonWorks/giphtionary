const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require ("mongoose")
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./database') 
const passport = require('./passport');
const app = express()
const PORT = 8080


const user = require('./routes/user')



console.log(dbConnection)
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://MichaelP:Stringbean86@project3.fwi9o.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
	useFindAndModify: false,
	store: new MongoStore({ mongooseConnection: dbConnection }),
	secret: 'cool-beans',
	saveUninitialized: false 

});


app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


app.use('/user', user)

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})