const router = require("express").Router();
const passport = require("passport");

router.get(
  "auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Jattas login success",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "NOT Authorized BRO..." });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in has been failed",
  });
});


router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/layout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
