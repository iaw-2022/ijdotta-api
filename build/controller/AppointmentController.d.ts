import { AppointmentRequestType, AppointmentResponseType, AppointmentSearchRequestType } from '~/types/appointment';
declare class AppointmentController {
    findAll(appointment: AppointmentSearchRequestType): Promise<Array<AppointmentResponseType>>;
    bookAppointment(appointment: AppointmentRequestType): Promise<AppointmentResponseType | undefined>;
    cancelAppointment(appointment: AppointmentRequestType): Promise<AppointmentResponseType | undefined>;
}
declare const _default: AppointmentController;
export default _default;
