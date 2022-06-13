import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutation';

function CreateUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const [createUser, {error}] = useMutation(CREATE_USER);
    console.log(error);
    return (
        <div className='create-user'>
          <input 
            type='text'
            placeholder='Name...'
            onChange={(event) => {setName(event.target.value)}}
          />
          <input
            type='text'
            placeholder='Username...'
            onChange={(event) => {setUsername(event.target.value)}}
          />
          <input
            type='password'
            placeholder='Password...'
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <button
            onClick={() => {createUser({variables: {
              name: name,
              username: username,
              password: password
            }})}}
          >
            Create user
          </button>
        </div>
    );
}

export default CreateUser