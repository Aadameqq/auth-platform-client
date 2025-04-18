import { useEffect, useMemo, useState } from 'react';
import { getCookie } from '@/features/common/services/cookie.service';
import { getPayloadIfValid } from '@/features/auth/services/token.service';
import { Session } from '@/features/auth/domain/session.domain';

export function useSession() {
    const token = typeof window !== 'undefined' && getCookie('access_token');

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
