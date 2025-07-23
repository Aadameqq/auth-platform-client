import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import {
    ACCESS_TOKEN_COOKIE_KEY,
    REFRESH_TOKEN_COOKIE_KEY,
} from '@/features/auth/constants/token-cookies.constants';

export const handleLogOut = async () => {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get(ACCESS_TOKEN_COOKIE_KEY);

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'auth', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        return NextResponse.json(data, { status: 401 });
    }

    cookiesStore.delete(ACCESS_TOKEN_COOKIE_KEY);
    cookiesStore.delete(REFRESH_TOKEN_COOKIE_KEY);

    return NextResponse.json({});
};
