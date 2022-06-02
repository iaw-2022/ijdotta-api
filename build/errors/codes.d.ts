declare const ERROR_CODES: {
    /**
     * General
     */
    NOT_DEFINED: string;
    API_INVALID_PARAMS: string;
    /**
     * Patient
     */
    PATIENT_NOT_FOUND: string;
    PATIENT_ALREADY_EXISTS: string;
    INVALID_LINK_CODE: string;
    /**
     * Appointments
     */
    APPOINTMENT_NOT_FOUND: string;
    APPOINTMENT_NOT_FREE: string;
    CANNOT_CANCEL_APPOINTMENT: string;
    /**
     * Security
     */
    UNAUTHORIZED_ACTION: string;
    API_REQUESTS_TOO_OFTEN: string;
};
export default ERROR_CODES;
