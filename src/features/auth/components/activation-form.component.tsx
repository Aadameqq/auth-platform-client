import { Button, Paper, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import { useActivateAccountForm } from '@/features/auth/hooks/use-activate-account-form.hook';
import { useActivateAccount } from '@/features/auth/hooks/use-activate-account.hook';

type ActivationFormProps = {
    markAsSuccessful: () => void;
};

export function ActivationForm({ markAsSuccessful }: ActivationFormProps) {
    const { form } = useActivateAccountForm();
    const { handleSubmit, isPending, isError } = useActivateAccount();

    return (
        <Paper radius="md" p="xl" withBorder>
            <Stack mb={'xl'} gap={'xs'}>
                <Text size="lg" fw={500}>
                    Activate your account
                </Text>
                <Text size="sm" c="dimmed">
                    We&#39;ve sent an activation code to your email address.
                </Text>
            </Stack>

            <form onSubmit={form.onSubmit(handleSubmit(markAsSuccessful))}>
                <Stack>
                    <TextInput
                        placeholder="Code from email"
                        radius="md"
                        disabled={isPending}
                        key={form.key('code')}
                        {...form.getInputProps('code')}
                    />
                    <Text c="red" size="sm">
                        {isError &&
                            'Your activation code is invalid or has expired'}
                    </Text>
                    <Button
                        type="submit"
                        fullWidth
                        loading={isPending}
                        loaderProps={{ type: 'dots' }}
                    >
                        Activate
                    </Button>

                    <Button
                        variant="light"
                        fullWidth
                        disabled={isPending}
                        loaderProps={{ type: 'dots' }}
                    >
                        Resend email
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}
