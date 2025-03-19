'use client';
import {Anchor, Button, Container, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput} from "@mantine/core";
import Link from "next/link";
import React from "react";
import {registerPath} from "@/features/auth/pages/register.page";
import {useLoginForm} from "@/features/auth/hooks/use-login-form.hook";
import {useLogin} from "@/features/auth/hooks/use-login.hook";

export const loginPath = "login"

export function LoginPage() {

    const {form} = useLoginForm();

    const {handleSubmit, isPending, isError} = useLogin();

    return (
        <Container size="xs">
            <Paper radius="md" p="xl" withBorder>
                <Text size="lg" fw={500}>
                    Log In
                </Text>

                <Divider my="lg"/>

                <form onSubmit={form.onSubmit(handleSubmit(() => {
                }))}>
                    <Stack>
                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            radius="md"
                            disabled={isPending}
                            key={form.key("email")}
                            {...form.getInputProps("email")}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            radius="md"
                            disabled={isPending}
                            key={form.key("password")}
                            {...form.getInputProps("password")}
                        />
                        <Text c="red" size="sm">
                            {isError && "Failed to create account. Try again later"}
                        </Text>
                    </Stack>
                    <Group justify="space-between" mt="xl">
                        <Anchor
                            href={registerPath}
                            component={Link}
                            type="button"
                            c="dimmed"
                            size="sm"
                        >
                            Don&#39;t have account yet? Register
                        </Anchor>
                        <Button
                            type="submit"
                            radius="xl"
                            loaderProps={{type: "dots"}}
                        >
                            Log In
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}