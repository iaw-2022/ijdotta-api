declare const CONFIG: {
    SERVER: {
        PORT: string | number;
    };
    AUTH0: {
        AUDIENCE: string | undefined;
        ISSUER_BASE_URL: string | undefined;
        EMAIL_NAMESPACE: string;
        ALGORITHM: string;
    };
};
export default CONFIG;
