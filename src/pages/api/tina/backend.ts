import { LocalBackendAuthProvider, TinaNodeBackend } from "@tinacms/datalayer";
import pkg from "tinacms-authjs/dist/index.js";
const { AuthJsBackendAuthProvider, TinaAuthJSOptions } = pkg;
import type { VercelRequest, VercelResponse } from "@vercel/node";

import databaseClient from "../../../../tina/__generated__/databaseClient.js";
import { APIRoute } from "astro";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
console.log("🚀 ~ isLocal:", isLocal);

export const prerender = false;

const tinaBackend = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
          debug: true,
        }),
      }),
  databaseClient,
});

export const GET = (req: VercelRequest, res: VercelResponse) => {
  console.log("🚀 ~ GET ~ res:", res);
  console.log("🚀 ~ GET ~ req:", req);
  // modify the request object here if needed
  return tinaBackend(req, res);
};

export const POST: APIRoute = ({ request }) => {
  console.log("🚀 ~ request:", request);
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    }),
  );
};

// export default GET;
