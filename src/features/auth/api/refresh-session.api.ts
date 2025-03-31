export async function refreshSession() {
    const response = await fetch('/api/auth', {
        method: 'PUT',
    });

    if (!response.ok) {
        throw response;
    }
}
