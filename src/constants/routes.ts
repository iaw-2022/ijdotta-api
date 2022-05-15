const ROUTES = {
    PATIENT: {
        BY_ID: '/patients/:id',
        APPOINTMENTS: {
            ALL: 'patients/:id/appointments',
            BY_ID: 'patients/:id/appointments/:apppointment_id'
        },
    },
    DOCTOR: {
        ALL: '/doctors',
        APPOINTMENTS: '/doctors/:id/appointments'
    },
    APPOINTMENTS: {
        ALL: '/appointments',
        BY_ID: 'appointments/:id'
    }
};

export default ROUTES;