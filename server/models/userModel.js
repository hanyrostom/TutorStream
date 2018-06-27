const db = require('./../../database');

exports.addNewUser = (newUser, callback) => {
  // console.log('wahts the new user ', newUser);
  let queryStr = 'INSERT INTO users (Name, Password, Email, Tutor, Bio) VALUES (?, ?, ?, ?, ?);';
  let params = [newUser.Name, newUser.Password, newUser.Email, newUser.Tutor, newUser.Bio];
  db.query(queryStr, params, callback);
};

exports.addNewUserTests = (userId, testId, callback) => {
  // console.log('user id ', userId);
  // console.log('tests ', newUser.Tests);
  let queryStr = `INSERT INTO user_tests (user_id, test_id) VALUES (${userId}, ${testId});`
  db.query(queryStr, callback);
};

exports.loginUser = (userCreds, callback) => {
  console.log('usercreds ', userCreds);
  let queryStr = 'SELECT * FROM users WHERE Email = ? AND Password = ?;'
  var params = [userCreds.Email, userCreds.Password];
  db.query(queryStr, params, callback);
;}


