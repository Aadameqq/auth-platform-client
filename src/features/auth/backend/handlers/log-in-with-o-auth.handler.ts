import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { OAuthErrorCode } from '@/features/auth/enums/o-auth-error-code.enum';
import { STATE_ID_COOKIE_KEY } from '@/features/auth/constants/o-auth-cookies.constants';
import { createAuthCookies } from '../helpers/create-auth-cookies.helper';

export const handleLogInWithOAuth = async (request: NextRequest) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code || !state) {
        return redirect(
            '/o-auth/error?errorCode=' + OAuthErrorCode.MISSING_PARAMS,
        );
    }

    const cookiesStore = await cookies();

    const stateIdCookie = cookiesStore.get(STATE_ID_COOKIE_KEY);
    cookiesStore.delete(STATE_ID_COOKIE_KEY);

    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `auth/oauth`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                stateToken: state,
                stateId: stateIdCookie?.value,
                code,
            }),
        },
    );

    if (!response.ok) {
        return redirect('/o-auth/error?errorCode='); // TODO:
    }

    const { accessToken, refreshToken } = await response.json();
    createAuthCookies(cookiesStore, accessToken, refreshToken);
    return redirect('/');
};
