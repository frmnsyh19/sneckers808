import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import Credentials from "next-auth/providers/credentials";

import { compareSync } from "bcrypt-ts";
import { SignInValidation } from "./libs/validation/UserValidation";

interface CustomUser {
  id: string;
  role: "admin" | "user";
  email?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validateSignIn = SignInValidation.safeParse(credentials);

        if (!validateSignIn.success) return null;
        const { email, password } = validateSignIn.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !password) {
          throw new Error("user not found");
        }

        const passwordMatch = compareSync(password, user.password as string);

        if (!passwordMatch) {
          return null;
        }

        return user;
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as CustomUser)?.role || "user";
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      session.user.id = token.sub as string;
      session.user.role = token.role ?? "user";
      return session;
    },
  },
});
