import { useEffect, useMemo, useState } from 'react';
import { getCookie } from '@/features/common/services/cookie.service';
import { getPayloadIfValid } from '@/features/auth/services/token.service';
import { Session } from '@/features/auth/domain/session.domain';
import { refreshSession } from '@/features/auth/api/refresh-session.api';

export function useSession() {
    const [session, setSession] = useState<Session | false>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function refresh() {
            try {
                const newToken = await refreshSession();

                const payload = getPayloadIfValid(newToken.accessToken);

                setIsLoading(false);
                setSession(payload);
            } catch {
                setIsLoading(false);
            }
        }

        const token = getCookie('access_token');

        if (!token) {
            setIsLoading(false);
            return;
        }

        const payload = getPayloadIfValid(token);

        if (!payload) {
            refresh();
            return;
        }

        setIsLoading(true);
        setSession(payload);
    }, []);

    const isAuthenticated = useMemo(() => !!session, [session]);

    return { isLoading, isAuthenticated, session };
}
