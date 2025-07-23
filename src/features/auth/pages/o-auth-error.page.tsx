import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { authUrls } from '@/features/auth/urls';
import { CustomOauthError } from '@/features/auth/enums/custom-oauth-error';

const messages: Record<
    CustomOauthError,
    { title: string; description: string }
> = {
    [CustomOauthError.EMAIL_ALREADY_EXISTS]: {
        title: 'The email address returned by your OAuth provider is already linked to an existing account',
        description:
            'Please sign in with that account or connect using an account with different email',
    },
    [CustomOauthError.EMAIL_NOT_VERIFIED]: {
        title: 'Your OAuth provider reports that this email address hasn’t been verified',
        description:
            'Please verify the email with your provider first, then try again or sign in with an account that already has a verified email',
    },
};

export async function OAuthErrorPage({
    searchParams,
}: {
    searchParams: Record<string, string>;
}) {
    const { code } = await searchParams;
    const msg = messages[code as CustomOauthError];
    const title =
        msg?.title ||
        'We couldn’t complete the OAuth sign‑in. Please try again';

    const description =
        msg?.description ||
        'If you believe this is an error, please contact the administrator.';
    return (
        <Container size="sm" px="md" pt="xl" pb="xl" mx="auto">
            <Stack align="center" gap="xl">
                <Title ta="center">{title}</Title>
                <Text c="dimmed" size="lg" ta="center">
                    {description}
                </Text>
                <Group justify="center">
                    <Link href={authUrls.login}>
                        <Button variant="subtle" size="md">
                            Take me back to log in page
                        </Button>
                    </Link>
                </Group>
            </Stack>
        </Container>
    );
}
