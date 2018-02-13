import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache()
});

client.query({
    query: gql`
      query users {
        users {
          id
          fullName
          email
        }
      }
    `,
  })
  .then(({data}) => appendData(data))
  .catch(error => console.error(error));

const appendData = (data) => {
  console.log(data);
  const app = document.querySelector('#app');
  app.innerHTML = '';
  data.users.map(user => {
    const d = document.createElement('div');
    d.innerHTML = `
      <div class="user">
        <h3>${user.fullName}</h3>
        <p>${user.email}</p>
      </div>
    `;
    app.appendChild(d.firstElementChild);
  })
}
