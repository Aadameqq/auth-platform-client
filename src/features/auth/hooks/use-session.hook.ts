import { useEffect, useMemo, useState } from 'react';
import { getCookie } from '@/features/common/services/cookie.service';
import { getPayloadIfValid } from '@/features/auth/services/token.service';
import { Session } from '@/features/auth/domain/session.domain';
import { ACCESS_TOKEN_COOKIE_KEY } from '@/features/auth/constants/token-cookies.constants';

export function useSession() {
    const token =
        typeof window !== 'undefined' && getCookie(ACCESS_TOKEN_COOKIE_KEY);

    const [session, setSession] = useState<Session>(Session.Empty);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const payload = token && getPayloadIfValid(token);
        setIsLoading(false);

        if (payload) {
            setSession(payload);
        }
    }, []);

    const isAuthenticated = useMemo(() => session !== Session.Empty, [session]);

    return { isLoading, isAuthenticated, session };
}
