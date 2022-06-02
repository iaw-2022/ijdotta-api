declare const CONSTANTS: {
    ROUTES: {
        DOCS: string;
        PATIENT: {
            ALL: string;
            BY_ID: string;
            LINK_PROFILE: string;
            APPOINTMENTS: {
                ALL: string;
                BY_ID: string;
            };
            TREATMENTS: {
                ALL: string;
            };
        };
        DOCTOR: {
            ALL: string;
            APPOINTMENTS: string;
        };
        APPOINTMENTS: {
            ALL: string;
            BY_ID: string;
        };
    };
    SECURITY: {
        RATE_LIMIT: {
            WINDOW_MS: number;
            MAX: number;
        };
    };
};
export default CONSTANTS;
