import { ApolloServer } from "apollo-server";

import { DogAPI } from "./datasource.js";
import resolvers from "./resolvers.js";
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    dogAPI: new DogAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🐕 let's go to ${url}`);
});
