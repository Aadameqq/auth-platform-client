"use client";
import {Container} from "@mantine/core";
import React from "react";
import {ActivationForm} from "@/features/auth/components/activation-form.component";
import {useToggle} from "@mantine/hooks";
import {ActivationSuccess} from "@/features/auth/components/activation-success.component";

export const accountActivationPath = "activation";

export function AccountActivationPage() {
    const [isSuccessful, markAsSuccessful] = useToggle()
    return (
        <Container size="xs">
            {
                isSuccessful ?
                    <ActivationSuccess/> :
                    <ActivationForm markAsSuccessful={markAsSuccessful}/>
            }
        </Container>
    );
}
