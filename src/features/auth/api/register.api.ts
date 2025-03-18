export type RegisterInput = {
    username: string;
    email: string;
    password: string;
};

export const register = async (input: RegisterInput) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "accounts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });

    if (!response.ok) {
        throw response;
    }

    return response.json();
};
