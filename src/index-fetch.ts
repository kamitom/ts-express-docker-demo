import express, { Request, Response } from 'express';
import { request } from 'graphql-request';
import fetch from 'node-fetch';

const app = express();
const port = 8877;
const targetUserId = 'ck6xvypyf00hh0722qw3fee6j';
const graphql_api_url = 'http://localhost:4455/';

const query = `
  query {
    users(where: { id: "${targetUserId}" }) {
      id
      name
      email
    }
  }
`;

// const query = `
//   query {
//     users {
//       id
//       name
//       email
//     }
//   }
// `;

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
};

const testFetchUser = async () => {
  const test = await fetch(graphql_api_url, opts)
    .then(res => res.json())
    .then(({ data }) => {
      console.log(
        `fetch a user info: ${JSON.stringify(data.users, undefined, 2)}`
      );
    });
  return test;
};
testFetchUser();

const getTargetUser = async () => {
  return request(graphql_api_url, query)
    .then(data => {
      console.log(`user info: ${JSON.stringify(data, undefined, 2)}`);
    })
    .catch(error => {
      console.log(`error1: ${JSON.stringify(error, undefined, 2)}`);
    });
};
// getTargetUser();

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <p>hello graphql-request call call graphql API.</p>
  `);
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`);
});
