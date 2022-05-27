const ROUTES = {
    DOCS: '/docs',

    PATIENT: {
        BY_ID: '/patients/:id',
        APPOINTMENTS: {
            ALL: '/patients/:id/appointments',
            BY_ID: '/patients/:id/appointments/:appointment_id'
        },
        TREATMENTS: {
            ALL: '/patients/:id/treatments',
        }
    },
    DOCTOR: {
        ALL: '/doctors',
        APPOINTMENTS: '/doctors/:id/appointments'
    },
    APPOINTMENTS: {
        ALL: '/appointments',
        BY_ID: '/appointments/:id'
    }
};

export default ROUTES;