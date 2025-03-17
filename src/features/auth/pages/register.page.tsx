"use client";

import {
    Paper,
    Group,
    Divider,
    Stack,
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Button,
    Text,
    Container,
} from "@mantine/core";
import React from "react";
import {useRegisterForm} from "../hooks/use-register-form.hook";
import {useRegister} from "../hooks/use-register.hook";
import Link from "next/link";
import {useRouter} from "next/navigation";

export function RegisterPage() {
    const {form} = useRegisterForm();
    const router = useRouter();

    const {handleSubmit, isPending, isError} = useRegister();

    return (
        <Container size="xs">
            <Paper radius="md" p="xl" withBorder>
                <Text size="lg" fw={500}>
                    Create Account
                </Text>

                <Divider my="lg"/>

                <form onSubmit={form.onSubmit(handleSubmit(() => router.push("/activation")))}>
                    <Stack>
                        <TextInput
                            label="Username"
                            placeholder="Your username"
                            radius="md"
                            disabled={isPending}
                            key={form.key("username")}
                            {...form.getInputProps("username")}
                        />
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

                        <Checkbox
                            label="I accept terms and conditions"
                            disabled={isPending}
                            key={form.key("terms")}
                            {...form.getInputProps("terms")}
                        />
                        <Text c="red" size="sm">
                            {isError && "Failed to create account. Try again later"}
                        </Text>
                    </Stack>

                    <Group justify="space-between" mt="xl">
                        <Anchor
                            href={"/login"}
                            component={Link}
                            type="button"
                            c="dimmed"
                            size="sm"
                        >
                            Already have an account? Log In
                        </Anchor>
                        <Button
                            type="submit"
                            radius="xl"
                            loading={isPending}
                            loaderProps={{type: "dots"}}
                        >
                            Create Account
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}
