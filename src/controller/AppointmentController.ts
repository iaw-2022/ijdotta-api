import {
  AppointmentRequestType,
  AppointmentResponseType,
  AppointmentSearchRequestType,
} from '~/types/appointment';
import appointments from '~/model/actions/Appointments';

class AppointmentController {
  async findAll(
    appointment: AppointmentSearchRequestType,
  ): Promise<Array<AppointmentResponseType>> {
    return await appointments.findAll(appointment);
  }

  async bookAppointment(appointment: AppointmentRequestType): Promise<AppointmentResponseType> {
    return await appointments.bookAppointment(appointment);
  }

  async cancelAppointment(
    appointment: AppointmentRequestType,
  ): Promise<AppointmentResponseType | undefined> {
    try {
      return await appointments.cancelAppointment(appointment);
    } catch (error) {
      throw error;
    }
  }
}

export default new AppointmentController();
