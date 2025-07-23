import { ReactNode } from 'react';
import { Button, Divider, Stack } from '@mantine/core';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import { authUrls } from '@/features/auth/urls';

interface Integration {
    name: string;
    slug: string;
    icon?: ReactNode;
}

const integrations: Integration[] = [
    {
        name: 'Github',
        slug: 'github',
        icon: <FaGithub size={23} />,
    },
];

export const OAuthButtons = () => {
    return (
        <>
            <Divider label="Or continue with" labelPosition="center" my="lg" />
            <Stack mb="md" mt="md">
                {integrations.map((integration) => (
                    <Button
                        key={integration.slug}
                        href={authUrls.oAuthRedirect(integration.slug)}
                        component={Link}
                        radius="xl"
                        leftSection={integration.icon}
                        variant="light"
                        color="gray"
                        size="md"
                    >
                        {integration.name}
                    </Button>
                ))}
            </Stack>
        </>
    );
};
