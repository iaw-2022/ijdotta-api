"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ROUTES = {
    DOCS: '/docs',
    PATIENT: {
        ALL: '/patients',
        BY_ID: '/patients/:id',
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
exports.default = ROUTES;
