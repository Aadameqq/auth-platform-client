import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const ACCESS_TOKEN_COOKIE_KEY = 'access_token';
export const REFRESH_TOKEN_COOKIE_KEY = 'refresh_token';

export async function POST(request: Request) {
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
}

export async function DELETE() {
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
}

export async function PUT() {
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
}
