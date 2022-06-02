import { PatientProfileRequestType, PatientRequestType, PatientResponseType, TreatmentGroupType } from "~/types/patient";
import patients from "~/model/actions/Patients";
import { AppointmentResponseType } from "~/types/appointment";
import { checkAccessRights } from "./utils";
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
            checkAccessRights(patient, patientInfo);
            return patientInfo;
        } catch (error) {
            throw error
        }
    }

    async getAppointments(patient: PatientRequestType): Promise<Array<AppointmentResponseType>> {
        try {
            checkAccessRights(patient);
            return await patients.getAppointments(patient);
        } catch (error) {
            throw error;
        }
    }

    async getTreatments(patient: PatientRequestType): Promise<Array<TreatmentGroupType>> {
        try {
            checkAccessRights(patient);
            return await patients.getTreatments(patient);
        } catch (error) {
            throw error;
        }
    }   
}

export default new PatientController();