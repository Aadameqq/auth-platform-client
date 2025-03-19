import {useForm, zodResolver} from "@mantine/form";
import {z} from "zod";

export type FormInput = {
    email: string;
    password: string;
};

const validation = z.object({
    email: z.string(),
    password: z.string(),
});

export function useLoginForm() {
    const form = useForm<FormInput>({
        initialValues: {email: "", password: ""},
        validate: zodResolver(validation),
    });

    return {form};
}
