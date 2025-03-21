import NextAuth, {User} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import "next-auth/jwt";
import {login, LoginInput} from "./features/auth/api/login.api";
import {getCurrentAccount} from "@/features/auth/api/get-current-account";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    return await login(credentials as LoginInput);
                } catch {
                    return null;
                }
            },
        }),
    ],

    pages: {
        signIn: '/',
        signOut: '/',
        error: '/',
        verifyRequest: '/',
        newUser: '/'
    },
    session: {strategy: "jwt"},
    callbacks: {
        jwt({token, user, account}) {
            return {...token, accessToken: account?.access_token, ...(user ? {user} : {})};
        },
        async session({session, token}) {

            const found = await getCurrentAccount({accessToken: token.user.accessToken});

            session.accessToken = token.accessToken;
            session.account = {...token.user, ...found}
            return session;
        },
    },
});

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        account: User
    }

    interface User {
        accessToken: string;
        refreshToken: string;
    }

}


declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        user: User
    }
}
