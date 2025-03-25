import { Button } from '@mantine/core';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { authUrls } from '@/features/auth/urls';
import { HeaderUser } from '@/features/layout/components/header-user.component';

export function HeaderAuthSection() {
    const session = useSession();

    if (!session.data) {
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

    // return <>Hello, {session.data.account.userName}</>;

    return <HeaderUser userName={session.data.account.userName} />;
}
