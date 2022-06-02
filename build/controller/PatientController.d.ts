import { PatientProfileRequestType, PatientRequestType, PatientResponseType, TreatmentGroupType } from "~/types/patient";
import { AppointmentResponseType } from "~/types/appointment";
declare class PatientController {
    createProfile(profile: PatientProfileRequestType): Promise<PatientResponseType | undefined>;
    getProfile(patient: PatientRequestType): Promise<PatientResponseType>;
    getAppointments(patient: PatientRequestType): Promise<Array<AppointmentResponseType>>;
    getTreatments(patient: PatientRequestType): Promise<Array<TreatmentGroupType>>;
}
declare const _default: PatientController;
export default _default;
