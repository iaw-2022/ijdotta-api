import { DoctorAppointmentsRequestType, DoctorResponseType } from '~/types/doctor';
import { AppointmentResponseType } from '~/types/appointment';
declare class DoctorActions {
    getDoctors(): Promise<Array<DoctorResponseType>>;
    getAppointments(doctor: DoctorAppointmentsRequestType): Promise<Array<AppointmentResponseType>>;
}
declare const _default: DoctorActions;
export default _default;
