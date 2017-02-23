var router = require("express").Router(),
path = require("path"),
callbacks = require(path.join(__dirname, "api","callbacks.js")),
passport = require("passport")
require(path.join(__dirname, "authentication", "passports"))(passport)
router.get("/", callbacks.home)
router.post("/register",passport.authenticate("local-signup",{successRedirect:"/profile",failureRedirect:"/register"}))
router.post("/login", passport.authenticate("local-login", {successRedirect:"/profile",failureRedirect:"/login"}))
router.get("/facebook",passport.authenticate("facebook",  { scope : 'email' }))
router.get("auth/facebook/callback", passport.authenticate("facebook",{successRedirect:"/profile", failureRedirect:"/login"}))
router.get("/twitter", passport.authenticate("twitter",{failWithError: true}))
router.get("auth/twitter/callback", passport.authenticate("twitter", {successRedirect:"/profile",failureRedirect:"/register"}))
router.get("/google", passport.authenticate("google", {scope:["profile", "email"]}))
router.get("auth/google/callback", passport.authenticate("google", {successRedirect:"/profile",failureRedirect:"/register"}))
router.get("/profile", callbacks.isLoggedIn)












module.exports = router
