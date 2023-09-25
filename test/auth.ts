import "dotenv/config";
import * as jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "";
export const bearer = jwt.sign(
  {
    email: "test@test.com",
    role: "admin",
    aud: process.env.JWT_AUD,
    iss: process.env.JWT_ISS,
    sub: process.env.JWT_SUB,
  },
  secret
);
