import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { STATE_ID_COOKIE_KEY } from '@/features/auth/constants/o-auth-cookies.constants';

export const handleRedirectToOAuth = async (request: NextRequest) => {
    const url = new URL(request.url);
    const provider = url.searchParams.get('provider');

    if (!provider) {
        return NextResponse.json(
            { message: "Missing query parameter 'provider'" },
            { status: 400 },
        );
    }
    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `oauth/${provider}/url`,
        {
            method: 'GET',
        },
    );

    if (!response.ok) {
        return NextResponse.json(await response.json(), { status: 404 });
    }

    const { url: oAuthUrl, stateId } = await response.json();

    const cookiesStore = await cookies();

    cookiesStore.set(STATE_ID_COOKIE_KEY, stateId, {
        sameSite: 'strict',
        secure: true, // TODO: age
    });

    return NextResponse.redirect(oAuthUrl, { status: 302 });
};
