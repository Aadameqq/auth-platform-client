import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createAuthCookies } from '@/features/auth/backend/helpers/create-auth-cookies.helper';

export const handleLogIn = async (request: NextRequest) => {
    const credentials = await request.json();

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
        return NextResponse.json(data, { status: 401 });
    }

    const { accessToken, refreshToken } = data;

    const cookiesStore = await cookies();
    createAuthCookies(cookiesStore, accessToken, refreshToken);
    return NextResponse.json({});
};
