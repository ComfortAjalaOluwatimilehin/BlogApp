var router = require("express").Router(),
path = require("path"),
callbacks = require(path.join(__dirname, "api","callbacks.js"))

router.get("/", callbacks.home)
router.post("/api/newUser", callbacks.newUser)




module.exports = router
