import { useEffect, useMemo, useState } from 'react';
import { getCookie } from '@/features/common/services/cookie.service';
import { getPayloadIfValid } from '@/features/auth/services/token.service';
import { Session } from '@/features/auth/domain/session.domain';
import { refreshSession } from '@/features/auth/api/refresh-session.api';

export function useSession() {
    const [session, setSession] = useState<Session>(Session.Empty);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function checkSession() {
            try {
                const token = getCookie('access_token');
                let payload = token && getPayloadIfValid(token);

                if (!payload) {
                    await refreshSession();
                    const newToken = getCookie('access_token');
                    payload = newToken && getPayloadIfValid(newToken);
                }

                if (payload) {
                    setSession(payload);
                }
            } catch {
            } finally {
                setIsLoading(false);
            }
        }

        checkSession();
    }, []);

    const isAuthenticated = useMemo(() => session !== Session.Empty, [session]);

    return { isLoading, isAuthenticated, session };
}
