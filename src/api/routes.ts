import { Router } from "express";
import ROUTES from "~/constants/routes";
import appointmentHandler from "./handlers/AppointmentHandler";

const api = Router();

api.route(ROUTES.APPOINTMENTS.BY_ID)
    .put(appointmentHandler.bookAppointment)
    .delete(appointmentHandler.cancelAppointment);

api.get(ROUTES.APPOINTMENTS.ALL, appointmentHandler.findAll);

export default api;