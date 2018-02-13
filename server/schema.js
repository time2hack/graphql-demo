module.exports = `
  type Mutation {
    addUser(first: String, last: String, email: String, picture: String, friends: [String]): User
  }
  type Query {
    users: [User]
    user(id: String!): User
  }
  type User {
    id: String!
    fullName: String
    name: Name
    email: String!
    friends: [User]
  }
  type Name {
    first: String
    last: String
  }
`;
