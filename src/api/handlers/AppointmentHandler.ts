import { Request, Response, NextFunction } from 'express';
import { AppointmentRequestType, AppointmentSearchRequestType } from '~/types/appointment';
import appointmentController from '~/controller/AppointmentController';
import apiUtils from '~/api/utils';
import utils from '~/api/utils';
class AppointmentHandler {
  async findAll(req: Request, res: Response, next: NextFunction) {
    let result;

    try {
      console.log(req.query);
      const query: Record<any, string | undefined> = req.query as Record<any, unknown> as Record<any,string | undefined>;
      const { patient_id, doctor_id, from, to, free } = Object.assign(
        query,
        Object.keys(query).forEach((key) => {
          query[key] = query[key] === 'null' ? undefined : String(query[key]);
        }),
      );

      const appointment: AppointmentSearchRequestType = {
        patient_id: patient_id ? BigInt(patient_id) : undefined,
        doctor_id: doctor_id ? BigInt(doctor_id) : undefined,
        from: from ? new Date(from) : undefined,
        to: to ? new Date(to) : undefined,
        free: free ? Boolean(free) : undefined,
      };

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
      result = await appointmentController.bookAppointment(appointment);
    } catch (error) {
      next(error);
      return false;
    }

    return apiUtils.sendResponse(res, result);
  }

  async cancelAppointment(req: Request, res: Response, next: NextFunction) {
    let result;

    try {
      const appointment: AppointmentRequestType = {
        patient_id: BigInt(req.params.id),
        appointment_id: BigInt(req.params.appointment_id),
      }
      // TODO validate
      result = await appointmentController.cancelAppointment(appointment);
    } catch (error) {
      next(error);
      return false;
    }

    apiUtils.sendResponse(res, result);
  }
}

export default new AppointmentHandler();
