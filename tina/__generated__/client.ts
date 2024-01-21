import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'no-really-i-dont-have-a-token', queries,  });
export default client;
  