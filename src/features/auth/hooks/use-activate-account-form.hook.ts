import {useForm, zodResolver} from "@mantine/form";
import {z} from "zod";

export type FormInput = {
    code: string;
};

const validation = z.object({
    code: z.string(),
});

export function useActivateAccountForm() {
    const form = useForm<FormInput>({
        initialValues: {code: ""},
        validate: zodResolver(validation),
    });

    return {form};
}
