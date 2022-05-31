import { PatientRequestType, PatientResponseType, TreatmentGroupType } from "~/types/patient";
import patients from "~/model/actions/Patients";
import { AppointmentResponseType } from "~/types/appointment";
import CodedError from "~/errors";

const checkAccessRights = async function(request: PatientRequestType, patient: PatientResponseType | undefined = undefined) {
    try {
        if (patient === undefined) {
            patient = await patients.getProfile(request);
        }
        if (patient.email !== request.email) {
            throw new CodedError("UNAUTHORIZED_ACTION", 403, `You have not permission to access pateint's ${request.patient_id} information.`);
        }
    } catch (error) {
        throw error;   
    }
}
class PatientController {
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