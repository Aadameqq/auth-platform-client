import { useSession } from '@/features/auth/hooks/use-session.hook';
import { authUrls } from '@/features/auth/urls';
import { HeaderUser } from '@/features/layout/components/header-user.component';
import { Button } from '@mantine/core';
import Link from 'next/dist/client/link';

export function HeaderAuthSection() {
    const { isAuthenticated, session } = useSession();

    if (!isAuthenticated) {
        return (
            <>
                <Link href={authUrls.login}>
                    <Button variant="default">Log in</Button>
                </Link>
                <Link href={authUrls.register}>
                    <Button>Sign up</Button>
                </Link>
            </>
        );
    }

    return (
        <>
            <HeaderUser userName={session.accountId} />
        </>
    );
}
