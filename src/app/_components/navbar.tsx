"use client";
import {
  Group,
  Box,
  Divider,
  Button,
  Burger,
  Drawer,
  ScrollArea,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";

const links: { title: string; url: string }[] = [
  { title: "Problemset", url: "#" },
  { title: "Contests", url: "#" },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={20} visibleFrom="sm">
            <Title order={3} mr={8}>
              Contest App
            </Title>
            {links.map((link) => (
              <a key={link.title} href={link.url} className={classes.link}>
                {link.title}
              </a>
            ))}
          </Group>
          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
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
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          {links.map((link) => (
            <a key={link.title} href={link.url} className={classes.link}>
              {link.title}
            </a>
          ))}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
