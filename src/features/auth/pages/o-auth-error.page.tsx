import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { authUrls } from '@/features/auth/urls';

export async function OAuthErrorPage() {
    return (
        <Container size="sm" px="md" pt="xl" pb="xl" mx="auto">
            <Stack align="center" gap="xl">
                <Title ta="center">
                    We couldn’t complete the OAuth sign‑in. Please try again
                </Title>
                <Text c="dimmed" size="lg" ta="center">
                    If you believe this is an error, please contact the
                    administrator.
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
