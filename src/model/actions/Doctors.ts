import { DoctorAppointmentsRequestType, DoctorResponseType } from '~/types/doctor';
import database from '~/model/prisma';
import { AppointmentResponseType } from '~/types/appointment';

class DoctorActions {
  async getDoctors(): Promise<Array<DoctorResponseType>> {
    return await database.doctors.findMany({
      select: {
        id: true,
        name: true,
        lastname: true,
      },
    });
  }

  async getAppointments(
    doctor: DoctorAppointmentsRequestType,
  ): Promise<Array<AppointmentResponseType>> {
    return await database.appointments.findMany({
      select: {
        id: true,
        doctor_id: true,
        patient_id: true,
        date: true,
        initial_time: true,
        end_time: true,
      },
      where: {
        doctor_id: doctor.id,
      },
    });
  }
}

export default new DoctorActions();
