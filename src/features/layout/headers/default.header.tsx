'use client';
import {
    Box,
    Burger,
    Divider,
    Drawer,
    Group,
    ScrollArea,
    Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './default.header.module.css';
import { HeaderLinks } from '@/features/layout/components/header-links.component';
import { HeaderAuthSection } from '@/features/layout/components/header-auth-section.component';

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false);

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group h="100%" gap={20} visibleFrom="sm">
                        <Title order={3} mr={8}>
                            Contest App
                        </Title>
                        <HeaderLinks />
                    </Group>
                    <Group visibleFrom="sm">
                        <HeaderAuthSection />
                    </Group>
                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="sm"
                    />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px)" mx="-md">
                    <Divider my="sm" />
                    <HeaderLinks />
                    <Divider my="sm" />
                    <Group justify="center" grow pb="xl" px="md">
                        <HeaderAuthSection />
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
