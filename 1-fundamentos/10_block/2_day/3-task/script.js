const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => (
  new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }
      return reject({ error: `User with ${id} not found.` });
  })
);

const getUserName = (userID) => (
  findUserById(userID).then((user) => user.name)
);

module.exports = { getUserName, findUserById };