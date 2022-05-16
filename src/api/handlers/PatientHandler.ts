import {Request, Response, NextFunction} from 'express';
import apiUtils from '~/api/utils';
import { PatientRequestType } from '~/types/patient';
import patientController from '~/controller/PatientController';

class PatientHandler {

    async getProfile(req: Request, res: Response, next: NextFunction) {
        let result;
        try {
            const patient: PatientRequestType = {
                patient_id: BigInt(req.params.id),
            };
            // TODO validate
            result = await patientController.getProfile(patient);
        } catch (error) {
            next(error);
            return false;
        }
        return apiUtils.sendResponse(res, result);
    }

    async getAppointments(req: Request, res: Response, next: NextFunction) {
        let result;
        try {
            const patient: PatientRequestType = {
                patient_id: BigInt(req.params.id),
            };
            // TODO validate
            result = await patientController.getAppointments(patient);
        } catch (error) {
            next(error);
            return false;
        }
        return apiUtils.sendResponse(res, result);
    }

    async getTreatments(req: Request, res: Response, next: NextFunction) {
        let result;
        try {
            const patient: PatientRequestType = {
                patient_id: BigInt(req.params.id),
            };
            // TODO validate
            result = await patientController.getTreatments(patient);
        } catch (error) {
            next(error);
            return false;
        }
        return apiUtils.sendResponse(res, result);
    }

}

export default new PatientHandler();