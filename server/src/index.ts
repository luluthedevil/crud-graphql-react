import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { Users } from './Entities/Users';

const main = async () => {

    await createConnection({
        type: "mysql",
        database: "GraphqlCRUD",
        username: "root",
        password: "password",
        logging: true,
        synchronize: false,
        entities: [Users]
    })

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3003, () => {
        console.log("Server running - port 3003")
    });
};
//17:04
main().catch((err) => {
    console.log(err);
});