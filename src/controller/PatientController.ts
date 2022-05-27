import { PatientRequestType, PatientResponseType, TreatmentGroupType } from "~/types/patient";
import patients from "~/model/actions/Patients";
import { AppointmentResponseType } from "~/types/appointment";
class PatientController {
    async getProfile(patient: PatientRequestType): Promise<PatientResponseType> {
        return await patients.getProfile(patient);
    }

    async getAppointments(patient: PatientRequestType): Promise<Array<AppointmentResponseType>> {
        return await patients.getAppointments(patient);
    }

    async getTreatments(patient: PatientRequestType): Promise<Array<TreatmentGroupType>> {
        return await patients.getTreatments(patient);
    }   
}

export default new PatientController();