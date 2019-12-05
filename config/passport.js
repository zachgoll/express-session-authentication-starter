const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passwordUtils = require('../lib/passwordUtils');
const connection = require('./database');
const User = connection.models.User;

/**
 * This function is called when the `passport.authenticate()` method is called.
 * 
 * If a user is found an validated, a callback is called (`cb(null, user)`) with the user
 * object.  The user object is then serialized with `passport.serializeUser()` and added to the 
 * `req.session.passport` object. 
 */
passport.use('local', new LocalStrategy(
    function(username, password, cb) {
        User.findOne({ username: username })
            .then((user) => {

                if (!user) { return cb(null, false) }
                
                // Function defined at bottom of app.js
                const isValid = passwordUtils.validPassword(password, user.hash, user.salt);
                
                if (isValid) {
                    return cb(null, user);
                } else {
                    return cb(null, false);
                }
            })
            .catch((err) => {   
                cb(err);
            });
}));
  
/**
 * This function is used in conjunction with the `passport.authenticate()` method.  See comments in
 * `passport.use()` above ^^ for explanation
 */
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

/**
 * This function is used in conjunction with the `app.use(passport.session())` middleware defined below.
 * Scroll down and read the comments in the PASSPORT AUTHENTICATION section to learn how this works.
 * 
 * In summary, this method is "set" on the passport object and is passed the user ID stored in the `req.session.passport`
 * object later on.
 */
passport.deserializeUser(function(id, cb) {
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});