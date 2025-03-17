type ActivateAccountInput = {
    code: string;
};

export async function activateAccount({code}: ActivateAccountInput) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `accounts/@me/activation/${code}`, {
        method: "GET",
    });
    return response.json();
}
