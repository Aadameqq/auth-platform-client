import { IconTrash } from '@tabler/icons-react';
import { Menu } from '@mantine/core';
import { signOut } from 'next-auth/react';

export function LogoutButton() {
    return (
        <Menu.Item
            color="red"
            leftSection={<IconTrash size={16} stroke={1.5} />}
            onClick={() => signOut()}
        >
            Log out
        </Menu.Item>
    );
}
