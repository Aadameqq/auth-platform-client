import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { STATE_ID_COOKIE_KEY } from '@/features/auth/constants/o-auth-cookies.constants';
import { redirect } from 'next/navigation';
import { authUrls } from '@/features/auth/urls';

export const handleRedirectToOAuth = async (request: NextRequest) => {
    const url = new URL(request.url);
    const provider = url.searchParams.get('provider');

    if (!provider) {
        return redirect(authUrls.oAuthError());
    }
    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `oauth/${provider}/url`,
        {
            method: 'GET',
        },
    );

    if (!response.ok) {
        return redirect(authUrls.oAuthError());
    }

    const { url: oAuthUrl, stateId } = await response.json();

    const cookiesStore = await cookies();

    cookiesStore.set(STATE_ID_COOKIE_KEY, stateId, {
        sameSite: 'strict',
        secure: true,
    });

    return NextResponse.redirect(oAuthUrl, { status: 302 });
};
