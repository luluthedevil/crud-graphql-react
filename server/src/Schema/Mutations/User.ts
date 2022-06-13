import { GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { MessageType } from "../TypeDefs/Messages";
import { Users } from '../../Entities/Users';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
    },
    async resolve(parent: any, args: any) {
        const {name, username, password} = args;
        await Users.insert({name, username, password});
        return args;
    }
};

interface argsType {
    id: string,
    username: string,
    oldPassword: string,
    newPassword: string,
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    }, // 15:30
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword} = args;
        const user = await Users.findOne({where:  {username}});
        
        if (!user) {
            throw new Error("USERNAME DOESNT EXIST");
        }

        const userPassword = user?.password;

        if (oldPassword === userPassword){
            await Users.update({username: username}, {password: newPassword});

            return {successful: true, message: "Successfuly changed password"}
        } else{
            throw new Error("Old password doesn't matched with typed password");
        }
    }
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(id);

        return {successful: true, message: "Deleted successfuly"};
    }
};