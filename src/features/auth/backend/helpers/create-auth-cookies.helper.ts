import {
    ACCESS_TOKEN_COOKIE_KEY,
    REFRESH_TOKEN_COOKIE_KEY,
} from '@/features/auth/constants/token-cookies.constants';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const createAuthCookies = (
    cookiesStore: ReadonlyRequestCookies,
    accessToken: string,
    refreshToken: string,
) => {
    cookiesStore.set(ACCESS_TOKEN_COOKIE_KEY, accessToken, {
        sameSite: 'strict',
        secure: true,
    });
    cookiesStore.set(REFRESH_TOKEN_COOKIE_KEY, refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    });
};
