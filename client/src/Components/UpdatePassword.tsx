import React, { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';

function UpdatePassword() {

    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);
    console.log(error);

    if(error){
        return <h1>There was an error :( </h1>
    }

    return (
        <div>
            <input
                type="text"
                id="username"
                placeholder="Username..."
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input
                type="password"
                id="oldPassword"
                placeholder="Old password..."
                onChange={(event) => {
                    setOldPassword(event.target.value);
                }}
            />
            <input
                type="password"
                id="newPassword"
                placeholder="New password..."
                onChange={(event) => {
                    setNewPassword(event.target.value);
                }}
            />
            <button
                onClick={() => {updatePassword({variables: {
                    username: username,
                    oldPassword: oldPassword,
                    newPassword: newPassword
                }})}}
            >
                Update password
            </button>
        </div>
    );
}

export default UpdatePassword;