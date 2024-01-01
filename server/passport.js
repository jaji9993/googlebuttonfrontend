const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID:'554589267381-40q7v4ckt0s70qrgndsp2789o5eeea09.apps.googleusercontent.com',
			clientSecret:'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',
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});