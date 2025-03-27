export type LoginInput = {
    email: string;
    password: string;
};

export const login = async (credentials: LoginInput) => {
    const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw response;
    }
};
