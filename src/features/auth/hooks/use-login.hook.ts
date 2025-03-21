import {useMutation} from "@tanstack/react-query";
import {signIn} from "next-auth/react";
import {FormInput} from "@/features/auth/hooks/use-login-form.hook";

export function useLogin() {
    const {mutateAsync, isPending, isError} = useMutation({
        mutationKey: ["login"],
        async mutationFn(data: FormInput) {
            const result = await signIn('credentials', {
                ...data,
                redirect: false,
            });
            if (result!.error) {
                throw result;
            }
        },
    });

    const handleSubmit = (onSuccess: () => void) => async (values: FormInput) => {
        await mutateAsync(values);
        onSuccess();
    };

    return {handleSubmit, isPending, isError};
}
