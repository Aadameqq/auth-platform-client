import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

export type FormInput = {
    username: string;
    email: string;
    password: string;
};

const validation = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    terms: z.boolean().refine((val) => val === true, {
        message: 'You must accept the terms and conditions',
    }),
});

export function useRegisterForm() {
    const form = useForm<FormInput & { terms: boolean }>({
        initialValues: { username: '', email: '', password: '', terms: false },
        validate: zodResolver(validation),
    });

    return { form };
}
