import { Request, Response, NextFunction } from "express";
import { AppointmentRequestType, AppointmentSearchRequestType } from "~/types/appointment";
import appointmentController from "~/controller/AppointmentController";
import apiUtils from '~/api/utils'
import utils from "~/api/utils";
class AppointmentHandler {

    async findAll(req: Request, res: Response, next: NextFunction) {
        let result;

        try {
            console.log(req.query);

            const appointment: AppointmentSearchRequestType = {};
            // appointment.patient_id = BigInt(String(req.query.patient_id));
            appointment.doctor_id = BigInt(String(req.query.doctor_id));
            // appointment.from = new Date(String(req.query.from));
            // appointment.to = new Date(String(req.query.to));
            appointment.free = Boolean(String(req.query.to));

            console.log(appointment);

            result = await appointmentController.findAll(appointment);

        } catch (error) {
            next(error);
            return false;
        }

        utils.sendResponse(res, result);
    }

    async bookAppointment(req: Request, res: Response, next: NextFunction) {
        let result;

        try {
            const appointment: AppointmentRequestType = req.body;
            appointment.appointment_id = BigInt(req.params.id);
            // TODO validate
            console.log(appointment);
            result = appointmentController.bookAppointment(appointment);
        } catch (error) {
            next(error);
            return false;
        }

        return apiUtils.sendResponse(res, result);
    }
    
    async cancelAppointment(req: Request, res: Response, next: NextFunction) {
        let result;

        try {
            const appointment: AppointmentRequestType = req.body;
            appointment.appointment_id = BigInt(req.params.id);
            // TODO validate
            result = appointmentController.cancelAppointment(appointment);
        } catch(error) {
            next(error);
            return error;
        }

        apiUtils.sendResponse(res, result);
    }
}

export default new AppointmentHandler();
