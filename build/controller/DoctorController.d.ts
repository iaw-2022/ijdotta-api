import { DoctorAppointmentsRequestType, DoctorResponseType } from "~/types/doctor";
import { AppointmentResponseType } from "~/types/appointment";
declare class DoctorController {
    getDoctors(): Promise<Array<DoctorResponseType>>;
    getAppointments(doctor: DoctorAppointmentsRequestType): Promise<Array<AppointmentResponseType>>;
}
declare const _default: DoctorController;
export default _default;
