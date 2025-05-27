import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";

const app = express();
const port = process.env.API_PORT || 3000;
const baseUrl = process.env.AUTH0_BASE_URL;
const domain = process.env.AUTH0_DOMAIN;
const issuerBaseUrl = `https://${domain}`;
const audience = process.env.AUTH0_AUDIENCE;

if (!baseUrl || !domain) {
  throw new Error(
    "Please make sure that the file .env.local is in place and populated",
  );
}

if (!audience) {
  console.log(
    "AUTH0_AUDIENCE not set in .env.local. Shutting down API server.",
  );
  process.exit(1);
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ["RS256"],
});

app.get("/api/shows", checkJwt, (req, res) => {
  res.send({
    msg: "Your access token was successfully validated!",
  });
});

const server = app.listen(port, () =>
  console.log(`API Server listening on port ${port}`),
);
process.on("SIGINT", () => server.close());
