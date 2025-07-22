import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import {
    ACCESS_TOKEN_COOKIE_KEY,
    REFRESH_TOKEN_COOKIE_KEY,
} from '@/features/auth/constants/token-cookies.constants';

export const handleRefreshTokens = async () => {
    const cookiesStore = await cookies();
    const oldRefreshToken = cookiesStore.get(REFRESH_TOKEN_COOKIE_KEY);

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'auth', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: oldRefreshToken }),
    });

    const data = await response.json();

    if (!response.ok) {
        return NextResponse.json(data, { status: 401 });
    }

    const { accessToken, refreshToken } = data;

    cookiesStore.set(ACCESS_TOKEN_COOKIE_KEY, accessToken, {
        sameSite: 'strict',
        secure: true,
    });
    cookiesStore.set(REFRESH_TOKEN_COOKIE_KEY, refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    });

    return NextResponse.json({});
};
