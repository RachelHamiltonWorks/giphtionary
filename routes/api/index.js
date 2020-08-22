const router = require("express").Router();
const wordRoutes = require("./user");

// Book routes
router.use("/user", wordRoutes);

module.exports = router;
