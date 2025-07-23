export const authUrls = {
    login: '/login',
    register: '/register',
    accountActivation: '/activation',
    oAuthError: (code?: string) => `/o-auth/error?code=${code || ''}`,
    oAuthRedirect: (provider: string) =>
        `/o-auth/redirect?provider=${provider}`,
};
