const ERROR_CODES = {

    /**
     * General
     */
    NOT_DEFINED: 'NOT_DEFINED',
    API_INVALID_PARAMS: 'API_INVALID_PARAMS',

    /**
     * Patient
     */
    PATIENT_NOT_FOUND: 'PATIENT_NOT_FOUND',
    PATIENT_ALREADY_EXISTS: 'PATIENT_ALREADY_EXISTS',

    /**
     * Appointments
     */
    APPOINTMENT_NOT_FOUND: 'APPOINTMENT_NOT_FOUND',
    APPOINTMENT_NOT_FREE: 'APPOINTMENT_NOT_FREE',
    CANNOT_CANCEL_APPOINTMENT: 'CANNOT_CANCEL_APPOINTMENT',

    /**
     * Security
     */
    UNAUTHORIZED_ACTION: 'UNAUTHORIZED_ACTION',
}

export default ERROR_CODES;