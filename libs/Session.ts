// ./lib/get-session.js

import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  // You need to create a secret key at least 32 characters long.
  password: process.env.NEXT_SESSION_SECRET as string,
  cookieName: "cart",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 24 * 60 * 60, // 1 day
  },
};
