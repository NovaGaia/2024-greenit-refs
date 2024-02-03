import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: '/api/tina/backend/', token: 'undefined', queries,  });
export default client;
  