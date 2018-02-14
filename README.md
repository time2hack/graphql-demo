# graphql-demo

GraphQL is an API query language. It provides a runtime to describe and query the data, no matter what the storage engine is.

GraphQL's benefits include

Typed data
Get what you asked for
Multiple data requests in one call
One endpoint, changes in API are now bit easier
Subscriptions
etc.
For example, consider a system similar to a social network where we have users and they have other users as friends. Following entity will completely encapsulate the data model; how it is going to be dealt in Back End and Front End, we will see after that.
```graphql
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
```
For this data description, the front end will sent the request to data as follows:
```graphql
{
  user(id: "5a826fdf9856ad6503d728d5") {
    id
    name {
      first
      last
    }
    email
    friends {
      id
      email
    }
  }
}
```
And will receive the response as follows:
```json
{
  "data": {
    "user": {
      "id": "5a826fdf9856ad6503d728d5",
      "name": {
        "first": "Stanton",
        "last": "Hansen"
      },
      "email": "stanton.hansen@example.com",
      "friends": [
        {
          "id": "5a826fdf0d054a6fab7bb067",
          "email": "barr.wolf@example.com"
        },
        ...
        {
          "id": "5a826fdf0d054a6fab7bb067",
          "email": "barr.wolf@example.com"
        }
      ]
    }
  }
}
```
And the good part is that the data can be from any interface, be it the RDBMS, NoSQL DB, a File or even in-memory operation.

[Read how to use Server](./server/README.md)

[Read how to use Client](./client/README.md)

Read full post at https://time2hack.com/2018/02/introduction-quick-guide-to-graphql-for-backend-frontend/
