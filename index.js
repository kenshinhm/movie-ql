// cannot import like below w/o bable-node, babel-preset-env -> refer to .babelrc
import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers,
});

server.start(() => console.log("Graphql Server Running"));