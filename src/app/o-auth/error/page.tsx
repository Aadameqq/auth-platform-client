import { OAuthErrorPage } from '@/features/auth/pages/o-auth-error.page';

export default async function OAuthError({
    searchParams,
}: {
    searchParams: Record<string, string>;
}) {
    return <OAuthErrorPage searchParams={searchParams} />;
}
