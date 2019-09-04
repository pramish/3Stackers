// import { Strategy as localStrategy } from 'passport-local';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import passport from 'passport';

// import { User } from '../models/user.model';

// export default function(passport) {
//   passport.use(
//     new localStrategy(
//       {
//         usernameField: 'email'
//       },
//       (email, password, done) => {
//         // Search the user
//         User.findOne({ email: email })
//           .then(user => {
//             if (!user) {
//               return done(null, false, {
//                 message: 'No User Found!'
//               });
//             }
//             //Match password
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//               if (err) throw err;
//               if (isMatch) {
//                 return done(null, user);
//               } else {
//                 return done(null, false, {
//                   message: 'Password or Email is incorrect!'
//                 });
//               }
//             });
//           })
//           .catch(err => console.log(err));
//       }
//     )
//   );
// }

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
