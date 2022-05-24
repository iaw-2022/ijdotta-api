import database from '../prisma';
import { CodedError } from '~/errors';

class ModelUtils {
  async checkPatientExists(id: bigint): Promise<Boolean> {
    const patient = await database.patients.findUnique({ where: { id } });

    if (patient == null) {
      throw new CodedError('PATIENT_NOT_FOUND', 404, `Patient with id ${id} not found.`);
    }

    return true;
  }

  async checkAppointmentExists(id: bigint): Promise<Boolean> {
    const appointment = await database.appointments.findUnique({ where: { id } });
    if (appointment == null) {
      throw new CodedError('APPOINTMENT_NOT_FOUND', 404, `Appointment with id ${id} not found.`);
    }
    return true;
  }

  async checkAppointmentIsFree(id: bigint): Promise<Boolean> {
    const appointment = await database.appointments.findUnique({ where: { id } });
    if (appointment == null) {
      throw new CodedError('APPOINTMENT_NOT_FOUND', 404, `Appointment with id ${id} not found.`);
    }

    if (appointment.patient_id != null) {
      throw new CodedError('APPOINTMENT_NOT_FREE', 406, `Appointment with id ${id} is not free.`);
    }

    return true;
  }
}

export default new ModelUtils();
