import { Router } from "express";
import ROUTES from "~/constants/routes";
import appointmentHandler from "./handlers/AppointmentHandler";
import doctorHandler from "./handlers/DoctorHandler";
import patientHandler from "./handlers/PatientHandler";
import { checkJwt } from "./security";

const api = Router();

/**
 * Appointments routes
 */
api.put(ROUTES.APPOINTMENTS.BY_ID, checkJwt, appointmentHandler.bookAppointment)
api.get(ROUTES.APPOINTMENTS.ALL, appointmentHandler.findAll);

/**
 * Patients routes
 */
api.get(ROUTES.PATIENT.BY_ID, checkJwt, patientHandler.getProfile);
api.post(ROUTES.PATIENT.ALL, patientHandler.createProfile);
api.put(ROUTES.PATIENT.LINK_PROFILE, patientHandler.linkProfile);
api.get(ROUTES.PATIENT.APPOINTMENTS.ALL, checkJwt, patientHandler.getAppointments);
api.get(ROUTES.PATIENT.TREATMENTS.ALL, checkJwt, patientHandler.getTreatments);
api.delete(ROUTES.PATIENT.APPOINTMENTS.BY_ID, checkJwt, appointmentHandler.cancelAppointment)

/**
 * Doctors routes
 */
api.get(ROUTES.DOCTOR.ALL, doctorHandler.getDoctors);
api.get(ROUTES.DOCTOR.APPOINTMENTS, doctorHandler.getAppointments);

export default api;