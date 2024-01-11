const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: "315550412475",
        clientSecret:"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",
        callbackURL: process.env.CLIENT_URL,
        scope: ['openid', 'profile'],
      },
      (accessToken, refreshToken, profile, done) => {
        // Store user information in the session
        return done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};
