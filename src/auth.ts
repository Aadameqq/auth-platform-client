import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import "next-auth/jwt";
import {login, LoginInput} from "./features/auth/api/login.api";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                return await login(credentials as LoginInput);
            },
        }),
    ],
    session: {strategy: "jwt"},
    callbacks: {
        jwt({token, account}) {
            return {...token, accessToken: account?.access_token};
        },
        async session({session, token}) {
            if (token?.accessToken) session.accessToken = token.accessToken;

            return session;
        },
    },
});

declare module "next-auth" {
    interface Session {
        accessToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
    }
}
