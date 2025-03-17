import {useMutation} from "@tanstack/react-query";
import {activateAccount} from "../api/activate-account";
import {FormInput} from "./use-activate-account-form.hook";

export function useActivateAccount() {
    const {mutateAsync, isPending, isError} = useMutation({
        mutationKey: ["verify-email"],
        async mutationFn(data: FormInput) {
            return await activateAccount(data);
        },
    });

    const handleSubmit = async (values: FormInput) => {
        await mutateAsync(values);
    };

    return {handleSubmit, isPending, isError};
}
