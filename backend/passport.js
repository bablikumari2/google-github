const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
require('dotenv').config(),
// console.log(process.env)



passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
     
       callbackURL: "auth/google/callback",
      // callbackURL: "https://ganna-app.herokuapp.com/auth/github/callback"
      porxy:true
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
       callbackURL: "/auth/github/callback",
      // callbackURL: "https://ganna-app.herokuapp.com/auth/github/callback"
      porxy:true
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID:"3133884073514905",
      clientSecret:"7d5a71e0ebe51b15555ec432e6ee42fc",
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});