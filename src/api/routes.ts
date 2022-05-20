import { Router } from "express";
import ROUTES from "~/constants/routes";
import appointmentHandler from "./handlers/AppointmentHandler";
import doctorHandler from "./handlers/DoctorHandler";
import patientHandler from "./handlers/PatientHandler";

const api = Router();

/**
 * @swagger
 * /appointments/{id}:
 *  put:
 *      description: book an appointment
 *  delete:
 *      description: cancel an appointment
 *  parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *          minimum: 1
 *        description: the appointment ID
 *      - in: body
 *        name: patient_id
 *        description: the patient to assign the appointment
 *        schema:
 *          type: object
 *          required:
 *            - patient_id
 *          properties:
 *            patient_id:
 *              type: integer
 */
api.route(ROUTES.APPOINTMENTS.BY_ID)
    .put(appointmentHandler.bookAppointment)
    .delete(appointmentHandler.cancelAppointment);

/**
 * @swagger
 * /appointments:
 *   get:
 *     description: returns all the appointments
 *   parameters:
 *     - in: query
 *       name: patient_id
 *       schema:
 *         type: integer
 *         minimum: 1
 *   responses:
 *     '200':
 *       description: a list of appointments
 *       content:
 *         schema:
 *           type: object
 */
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