import { IconTrash } from '@tabler/icons-react';
import { Menu } from '@mantine/core';

export function LogoutButton() {
    return (
        <Menu.Item
            color="red"
            leftSection={<IconTrash size={16} stroke={1.5} />}
            onClick={() => {}}
        >
            Log out
        </Menu.Item>
    );
}
