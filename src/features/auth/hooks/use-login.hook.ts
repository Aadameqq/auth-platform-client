import { useMutation } from '@tanstack/react-query';
import { FormInput } from '@/features/auth/hooks/use-login-form.hook';
import { login } from '@/features/auth/api/login.api';

export function useLogin() {
    const { mutateAsync, isPending, isError } = useMutation({
        mutationKey: ['login'],
        async mutationFn(data: FormInput) {
            await login(data);
        },
    });

    const handleSubmit =
        (onSuccess: () => void) => async (values: FormInput) => {
            await mutateAsync(values);
            onSuccess();
        };

    return { handleSubmit, isPending, isError };
}
