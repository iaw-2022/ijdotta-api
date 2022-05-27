import { Request, Response, NextFunction } from 'express';
import { AppointmentRequestType, AppointmentSearchRequestType } from '~/types/appointment';
import appointmentController from '~/controller/AppointmentController';
import apiUtils from '~/api/utils';
import { parseAppointmentSearchRequest, parseAppointmentRequest } from './parser';
class AppointmentHandler {
  async findAll(req: Request, res: Response, next: NextFunction) {
    let result;
    try {
      const appointment: AppointmentSearchRequestType = parseAppointmentSearchRequest(req);
      result = await appointmentController.findAll(appointment);
    } catch (error) {
      next(error);
      return false;
    }

    apiUtils.sendResponse(res, result);
  }

  async bookAppointment(req: Request, res: Response, next: NextFunction) {
    let result;

    try {
      const appointment: AppointmentRequestType = parseAppointmentRequest(req);
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
      const appointment: AppointmentRequestType = parseAppointmentRequest(req);
      result = await appointmentController.cancelAppointment(appointment);
    } catch (error) {
      next(error);
      return false;
    }

    return apiUtils.sendResponse(res, result);
  }
}

export default new AppointmentHandler();
