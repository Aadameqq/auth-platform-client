type GetCurrentAccountInput = {
    accessToken: string;
};

export async function getCurrentAccount({
    accessToken,
}: GetCurrentAccountInput) {
    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `accounts/@me`,
        {
            method: 'GET',
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        },
    );

    if (!response.ok) {
        throw response;
    }

    return response.json();
}
