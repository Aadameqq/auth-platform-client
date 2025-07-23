export const authUrls = {
    login: '/login',
    register: '/register',
    accountActivation: '/activation',
    oAuthError: '/o-auth/error',
    oAuthRedirect: (provider: string) =>
        `/o-auth/redirect?provider=${provider}`,
};
