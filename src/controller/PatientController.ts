import { PatientProfileRequestType, PatientRequestType, PatientResponseType, TreatmentGroupType } from "~/types/patient";
import patients from "~/model/actions/Patients";
import { AppointmentResponseType } from "~/types/appointment";
import { checkAccessRights } from "./utils";
import CodedError from "~/errors";
class PatientController {
    async createProfile(profile: PatientProfileRequestType): Promise<PatientResponseType | undefined> {
        try {
            return await patients.createProfile(profile);
        } catch (error) {
            throw error;
        }
    }

    async getProfile(patient: PatientRequestType): Promise<PatientResponseType> {
        try {
            const patientInfo = await patients.getProfile(patient);
            await checkAccessRights(patient, patientInfo);
            return patientInfo;
        } catch (error) {
            throw error
        }
    }

    async getAppointments(patient: PatientRequestType): Promise<Array<AppointmentResponseType>> {
        try {
            await checkAccessRights(patient);
            return await patients.getAppointments(patient);
        } catch (error) {
            throw error;
        }
    }

    async getTreatments(patient: PatientRequestType): Promise<Array<TreatmentGroupType>> {
        try {
            await checkAccessRights(patient);
            return await patients.getTreatments(patient);
        } catch (error) {
            throw error;
        }
    }   

    async getPatientId(email: string): Promise<bigint> {
        try {
            const id = await patients.getPatientId(email)
            if (id !== undefined) {
                return id
            }
            else {
                throw new CodedError('PATIENT_NOT_FOUND', 404, "Patient with given email not found.");
            }
        } catch (error) {
            throw error;
        }
    }

    async checkPatientExistes(id: bigint): Promise<boolean> {
        try {
            return await patients.checkPatientExists(id)
        } catch (error) {
            throw error;
        }
    }
}

export default new PatientController();