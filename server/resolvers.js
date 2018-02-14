const uuid = require('uuid/v4');

// Some fake data
const users = require('./users');

const friendsMapper = id => (Object.assign(
  {},
  users[id],
  { friends: users[id].friends.map(i => users[i]) }
));

// The resolvers
module.exports = {
  Query: {
    users: () => Object.values(users).map(u => friendsMapper(u.id)),
    user: (_, {id}) => friendsMapper(id),
  },
  Mutation: {
    addUser: (_, data) => {
      const uid = uuid();
      users[uid] = Object.assign({}, data, {id: uid})
      return friendsMapper(uid);
    }
  }
};
