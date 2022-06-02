"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = __importDefault(require("~/constants/routes"));
var AppointmentHandler_1 = __importDefault(require("./handlers/AppointmentHandler"));
var DoctorHandler_1 = __importDefault(require("./handlers/DoctorHandler"));
var PatientHandler_1 = __importDefault(require("./handlers/PatientHandler"));
var security_1 = require("./security");
var api = (0, express_1.Router)();
/**
 * Appointments routes
 */
api.put(routes_1.default.APPOINTMENTS.BY_ID, AppointmentHandler_1.default.bookAppointment);
api.get(routes_1.default.APPOINTMENTS.ALL, AppointmentHandler_1.default.findAll);
/**
 * Patients routes
 */
api.get(routes_1.default.PATIENT.BY_ID, security_1.checkJwt, PatientHandler_1.default.getProfile);
api.post(routes_1.default.PATIENT.ALL, PatientHandler_1.default.createProfile);
api.get(routes_1.default.PATIENT.APPOINTMENTS.ALL, security_1.checkJwt, PatientHandler_1.default.getAppointments);
api.get(routes_1.default.PATIENT.TREATMENTS.ALL, security_1.checkJwt, PatientHandler_1.default.getTreatments);
api.delete(routes_1.default.PATIENT.APPOINTMENTS.BY_ID, security_1.checkJwt, AppointmentHandler_1.default.cancelAppointment);
/**
 * Doctors routes
 */
api.get(routes_1.default.DOCTOR.ALL, DoctorHandler_1.default.getDoctors);
api.get(routes_1.default.DOCTOR.APPOINTMENTS, DoctorHandler_1.default.getAppointments);
exports.default = api;
