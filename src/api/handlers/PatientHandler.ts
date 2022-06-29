import { Request, Response, NextFunction } from 'express';
import apiUtils from '~/api/utils';
import { PatientProfileRequestType, PatientRequestType } from '~/types/patient';
import patientController from '~/controller/PatientController';
import { parsePatientCreateProfileRequest, parsePatientRequest } from './parser';

class PatientHandler {
    async createProfile(req: Request, res: Response, next: NextFunction) {
        let result;
        try {
            const profile: PatientProfileRequestType = parsePatientCreateProfileRequest(req);
            result = await patientController.createProfile(profile);
        } catch (error) {
            next(error);
            return false;
        }
        return apiUtils.sendResponse(res, result);
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        let result;
        try {
            const patient: PatientRequestType = parsePatientRequest(req);
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
            const patient: PatientRequestType = parsePatientRequest(req);
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
            const patient: PatientRequestType = parsePatientRequest(req);
            result = await patientController.getTreatments(patient);
        } catch (error) {
            next(error);
            return false;
        }
        return apiUtils.sendResponse(res, result);
    }

    async getPatientId(req: Request, res: Response, next: NextFunction) {
        let result;

        try {
            const email : string = String(req.params.email);
            const id = await patientController.getPatientId(email);
            result = {id}
        } catch (error) {
            next(error);
        }
        apiUtils.sendResponse(res, result);
    }

    async checkPatientExists(req: Request, res: Response, next: NextFunction) {
        let result;
        try {
            const patientId: bigint = BigInt(req.params.id);
            const exists = await patientController.checkPatientExistes(patientId);
            result = {exists}
        } catch (error) {
            next(error);
        }
        apiUtils.sendResponse(res, result);
    }
}

export default new PatientHandler();
