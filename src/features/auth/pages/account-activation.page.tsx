"use client";
import {Anchor, Button, Container, Group, Paper, Stack, Text, TextInput,} from "@mantine/core";
import {useActivateAccountForm} from "../hooks/use-activate-account-form.hook";
import {useActivateAccount} from "../hooks/use-activate-account.hook";
import React from "react";

export function AccountActivationPage() {
    const {form} = useActivateAccountForm();
    const {handleSubmit, isPending, isError} = useActivateAccount();

    return (
        <Container size="xs">
            <Paper radius="md" p="xl" withBorder>
                <Group mb={"md"}>
                    <Text size="lg" fw={500}>
                        Activate your account
                    </Text>
                </Group>


                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        <TextInput
                            placeholder="Code from email"
                            radius="md"
                            disabled={isPending}
                            key={form.key("code")}
                            {...form.getInputProps("code")}
                        />
                        <Text c="red" size="sm">
                            {isError && "Your activation code has expired"}
                        </Text>
                    </Stack>

                    <Group justify="space-between">
                        <Anchor
                            component="button"
                            type="button"
                            c="dimmed"
                            size="sm"
                        >
                            Send again
                        </Anchor>
                        <Button
                            type="submit"
                            radius="xl"
                            loading={isPending}
                            loaderProps={{type: "dots"}}
                        >
                            Verify
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}
