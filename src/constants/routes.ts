const ROUTES = {
    DOCS: '/docs',

    PATIENT: {
        ALL: '/patients',
        GET_ID: '/patients/:email/id',
        BY_ID: '/patients/:id',
        EXISTS: '/patients/:id/exists',
        LINK_PROFILE: '/patients/:id/link-profile',
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