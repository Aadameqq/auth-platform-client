export type LogOutInput = {
    accessToken: string;
};

export const logOut = async (input: LogOutInput) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'auth', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${input.accessToken}`,
        },
    });

    if (!response.ok) {
        throw response;
    }
};
