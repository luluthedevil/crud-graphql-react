import React from 'react';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutation';
import { useQuery, useMutation } from '@apollo/client';

function ListOfUsers() {
    const {data, error} = useQuery(GET_ALL_USERS);
    console.log(error);

    const [deleteUser] = useMutation(DELETE_USER);

    return (
        <div>
            {data && (data.getAllUsers.map((user: any) => {
                return( 
                    <div>
                        {user.name}  /  {user.username}
                        <button onClick={() => {
                            deleteUser({variables: {id: user.id}})}}
                        >
                            Delete user
                        </button>
                    </div>
                )
            }))}
        </div>
    );
}

export default ListOfUsers;