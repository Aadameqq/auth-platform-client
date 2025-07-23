import { handleLogIn } from '@/features/auth/backend/handlers/log-in.handler';
import { handleLogOut } from '@/features/auth/backend/handlers/log-out.handler';
import { handleRefreshTokens } from '@/features/auth/backend/handlers/refresh-tokens.handler';

export const POST = handleLogIn;
export const DELETE = handleLogOut;
export const PUT = handleRefreshTokens;
