import { NextFunction, Request, Response } from "express";
import apiUtils from '~/api/utils';
import doctorController from "~/controller/DoctorController";
import { DoctorAppointmentsRequestType } from "~/types/doctor";
import {noop} from 'lodash';
import { parseDoctorRequest } from "./parser";
class DoctorHandler {

    async getDoctors(req: Request, res: Response, next: NextFunction) {
        noop(req);
        let result;

        try {
            result = await doctorController.getDoctors();
        } catch (error) {
            next(error);
            return false;
        }

        apiUtils.sendResponse(res, result);
    }

    async getAppointments(req: Request, res: Response, next: NextFunction) {
        let result;

        try {
            const doctor: DoctorAppointmentsRequestType = parseDoctorRequest(req);
            result = await doctorController.getAppointments(doctor);
        } catch (error) {
            next(error);
            return false;
        }

        apiUtils.sendResponse(res, result);
    }
}

export default new DoctorHandler();