const userModel = require('./server/users/userModel.js');

test('retrieving a user by email should return a result', () => {
  userModel.findUserByEmail('weimann.xavier@example.net', (err, user) => {
    if (err) {
      expect(err).toBe('an error message different than this');
      next(new Error(err));
    } else {
      expect(user.length).toBeGreaterThan(0);
    }
  });
});
