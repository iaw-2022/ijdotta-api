import database from '../prisma';
import { CodedError } from '~/errors';
import handleError from '../handleError';

class ModelUtils {
  async checkPatientExists(id: bigint): Promise<Boolean> {
    try {
      const patient = await database.patients.findUnique({ where: { id } });

      if (patient == null) {
        throw new CodedError('PATIENT_NOT_FOUND', 404, `Patient with id ${id} not found.`);
      }

      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }

  async checkAppointmentExists(id: bigint): Promise<Boolean> {
    try {
      const appointment = await database.appointments.findUnique({ where: { id } });
      if (appointment == null) {
        throw new CodedError('APPOINTMENT_NOT_FOUND', 404, `Appointment with id ${id} not found.`);
      }
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }

  async checkAppointmentIsFree(id: bigint): Promise<Boolean> {
    try {
      const appointment = await database.appointments.findUnique({ where: { id } });
      if (appointment == null) {
        throw new CodedError('APPOINTMENT_NOT_FOUND', 404, `Appointment with id ${id} not found.`);
      }

      if (appointment.patient_id != null) {
        throw new CodedError('APPOINTMENT_NOT_FREE', 406, `Appointment with id ${id} is not free.`);
      }
      
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }

  async checkAppointmentBelongsToPatient(id: bigint, patient_id: bigint): Promise<Boolean> {
    try {
      const appointment = await database.appointments.findUnique({ where: { id } });
      if (appointment == null) {
        throw new CodedError('APPOINTMENT_NOT_FOUND', 404, `Appointment with id ${id} not found.`);
      }

      if (appointment.patient_id != patient_id) {
        throw new CodedError(
          'CANNOT_CANCEL_APPOINTMENT',
          403,
          `Appointment with id ${id} does not belong to patient with id ${patient_id}`,
        );
      }

      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }
}

export default new ModelUtils();
