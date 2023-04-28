import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { SERVER_LINK } from "@constants";

const cache = new InMemoryCache();

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: SERVER_LINK,
  cache,
});

export * from "./queries";
