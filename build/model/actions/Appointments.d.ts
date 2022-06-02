import { AppointmentRequestType, AppointmentResponseType, AppointmentSearchRequestType } from '~/types/appointment';
declare class AppointmentActions {
    findAll(appointment: AppointmentSearchRequestType): Promise<Array<AppointmentResponseType>>;
    bookAppointment(appointment: AppointmentRequestType): Promise<AppointmentResponseType | undefined>;
    cancelAppointment(appointment: AppointmentRequestType): Promise<AppointmentResponseType | undefined>;
}
declare const _default: AppointmentActions;
export default _default;
