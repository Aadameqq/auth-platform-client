import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import { OAuthErrorCode } from '@/features/auth/enums/o-auth-error-code.enum';

const messages: Record<OAuthErrorCode, string> = {
    [OAuthErrorCode.INVALID_PROVIDER]: 'Given provider does not exist',
    [OAuthErrorCode.MISSING_PARAMS]: '',
};

export async function OAuthErrorPage({
    searchParams,
}: {
    searchParams: Record<string, string>;
}) {
    const { errorCode } = await searchParams;

    return (
        <Container size="sm" px="md" pt="xl" pb="xl" mx="auto">
            <Stack align="center" gap="xl">
                <Title>{messages[errorCode as OAuthErrorCode]}</Title>
                <Text c="dimmed" size="lg" ta="center">
                    If you believe this is an error, please contact the
                    administrator.
                </Text>
                <Group justify="center">
                    <Button variant="subtle" size="md">
                        Take me back to home page
                    </Button>
                </Group>
            </Stack>
        </Container>
    );
}
