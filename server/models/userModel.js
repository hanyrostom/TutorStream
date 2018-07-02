const db = require('./../../database');

exports.addNewUser = (newUser, callback) => {
  let queryStr = 'INSERT INTO users (Name, Password, Email, Tutor, Bio) VALUES (?, ?, ?, ?, ?)';
  let params = [newUser.name, newUser.password, newUser.email, newUser.tutor, newUser.bio];
  db.query(queryStr, params, callback);
};

exports.addNewUserTests = (userId, testId, callback) => {
  let queryStr = `INSERT INTO user_tests (id, test_id) VALUES (${userId}, ${testId})`;
  db.query(queryStr, callback);
};

exports.loginUser = (userCreds, callback) => {
  console.log('usercreds ', userCreds);
  let queryStr = 'SELECT * FROM users WHERE Email = ? AND Password = ?';
  let params = [userCreds.Email, userCreds.Password];
  db.query(queryStr, params, callback);
};

exports.getUserInfoDB = (userId, callback) => {
  let queryStr = `SELECT * FROM users where ID = ${userId}`;
  db.query(queryStr, callback);
};


