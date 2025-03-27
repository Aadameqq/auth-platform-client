export const getCookie = (key: string): string | false => {
    const part = document.cookie
        .split(';')
        .find((p) => p.startsWith(`${key}=`));
    if (!part) {
        return false;
    }
    return part.split('=')[1];
};
