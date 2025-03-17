import {useMutation} from "@tanstack/react-query";
import {FormInput} from "./use-register-form.hook";
import {register} from "../api/register.api";

export function useRegister() {
    const {mutateAsync, isPending, isError} = useMutation({
        mutationKey: ["register"],
        async mutationFn(data: FormInput) {
            return await register(data);
        },
    });

    const handleSubmit = (onSuccess: () => void) => async (values: FormInput) => {
        await mutateAsync(values);
        onSuccess();
    };

    return {handleSubmit, isPending, isError};
}
