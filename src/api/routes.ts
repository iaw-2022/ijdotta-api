import { Router } from "express";
import ROUTES from "~/constants/routes";
import appointmentHandler from "./handlers/AppointmentHandler";
import patientHandler from "./handlers/PatientHandler";

const api = Router();

api.route(ROUTES.APPOINTMENTS.BY_ID)
    .put(appointmentHandler.bookAppointment)
    .delete(appointmentHandler.cancelAppointment);

api.get(ROUTES.APPOINTMENTS.ALL, appointmentHandler.findAll);

api.get(ROUTES.PATIENT.BY_ID, patientHandler.getProfile);
api.get(ROUTES.PATIENT.APPOINTMENTS.ALL, patientHandler.getAppointments);
api.get(ROUTES.PATIENT.TREATMENTS.ALL, patientHandler.getTreatments);


export default api;