import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3003/graphql',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <CreateUser />
        <ListOfUsers />
        <UpdatePassword />
      </div>
    </ApolloProvider>
  );
}
// yarn dev in server
// npm start in client

export default App;
