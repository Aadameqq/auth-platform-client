import { Session } from '@/features/auth/domain/session.domain';
import { decodeJwt } from 'jose';

export function getPayloadIfValid(token: string): Session | false {
    const payload = decodeJwt(token);

    if (!payload || !payload.exp) return false;

    if (payload.exp * 1000 < Date.now()) return false;

    return new Session();
}
