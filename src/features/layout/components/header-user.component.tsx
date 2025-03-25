import {
    Avatar,
    Group,
    Menu,
    Text,
    UnstyledButton,
    useMantineTheme,
} from '@mantine/core';
import {
    IconHeart,
    IconMessage,
    IconSettings,
    IconStar,
} from '@tabler/icons-react';
import { LogoutButton } from '@/features/layout/components/logout-button.component';

type HeaderUserProps = {
    userName: string;
};

export function HeaderUser({ userName }: HeaderUserProps) {
    const theme = useMantineTheme();

    return (
        <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton>
                    <Group gap={7}>
                        <Text fw={500} size="sm" lh={1} mr={3}>
                            {userName}
                        </Text>
                        <Avatar alt={userName} radius="xl" size={35} />
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    leftSection={
                        <IconHeart
                            size={16}
                            color={theme.colors.red[6]}
                            stroke={1.5}
                        />
                    }
                >
                    Liked posts
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconStar
                            size={16}
                            color={theme.colors.yellow[6]}
                            stroke={1.5}
                        />
                    }
                >
                    Saved posts
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconMessage
                            size={16}
                            color={theme.colors.blue[6]}
                            stroke={1.5}
                        />
                    }
                >
                    Your comments
                </Menu.Item>

                <Menu.Label>Settings</Menu.Label>
                <Menu.Item
                    leftSection={<IconSettings size={16} stroke={1.5} />}
                >
                    Account settings
                </Menu.Item>
                <LogoutButton />
            </Menu.Dropdown>
        </Menu>
    );
}
