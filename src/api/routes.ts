import { Router } from "express";
import ROUTES from "~/constants/routes";
import appointmentHandler from "./handlers/AppointmentHandler";
import doctorHandler from "./handlers/DoctorHandler";
import patientHandler from "./handlers/PatientHandler";

const api = Router();

/**
 * Appointments routes
 */
api.route(ROUTES.APPOINTMENTS.BY_ID)
    .put(appointmentHandler.bookAppointment)
    .delete(appointmentHandler.cancelAppointment);

api.get(ROUTES.APPOINTMENTS.ALL, appointmentHandler.findAll);

/**
 * Patients routes
 */
api.get(ROUTES.PATIENT.BY_ID, patientHandler.getProfile);
api.get(ROUTES.PATIENT.APPOINTMENTS.ALL, patientHandler.getAppointments);
api.get(ROUTES.PATIENT.TREATMENTS.ALL, patientHandler.getTreatments);

/**
 * Doctors routes
 */
api.get(ROUTES.DOCTOR.ALL, doctorHandler.getDoctors);
api.get(ROUTES.DOCTOR.APPOINTMENTS, doctorHandler.getAppointments);

export default api;