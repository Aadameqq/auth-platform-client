import {Button, Paper, Stack, Text} from "@mantine/core";
import Link from "next/link";
import React from "react";
import {authUrls} from "@/features/auth/urls";

export function ActivationSuccess() {

    return (
        <Paper radius="md" p="xl" withBorder>
            <Stack>
                <Text size="lg" fw={500}>
                    Successfully activated
                </Text>
                <Button
                    href={authUrls.login}
                    component={Link}
                    type="button"
                    variant="primary"
                    size="sm"
                >
                    Log In
                </Button>
            </Stack>

        </Paper>
    );
}