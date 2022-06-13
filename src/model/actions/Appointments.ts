import {
  AppointmentRequestType,
  AppointmentResponseType,
  AppointmentSearchRequestType,
} from '~/types/appointment';
import database from '~/model/prisma';
import utils from './utils';
import handleError from '../handleError';

class AppointmentActions {
  async findAll(
    appointment: AppointmentSearchRequestType,
  ): Promise<Array<AppointmentResponseType>> {
    try {
      let where: any = {};
      const { doctor_id, patient_id, from, to, free } = appointment;
      if (doctor_id) where.doctor_id = doctor_id;
      if (patient_id) where.patient_id = patient_id;
      else if (free) where.patient_id = null;
      else where.NOT = { patient_id: null };
      if (from || to) {
        where.date = {};
        if (from) where.date.gte = from;
        if (to) where.date.lte = to;
      }

      const appointments: AppointmentResponseType[] = await database.appointments.findMany({
        select: {
          id: true,
          doctor_id: true,
          date: true,
          initial_time: true,
          end_time: true,
        },
        where,
      });

      return appointments;
    } catch (error) {
      handleError(error);
      return [];
    }
  }

  async bookAppointment(
    appointment: AppointmentRequestType,
  ): Promise<AppointmentResponseType | undefined> {
    try {
      await utils.checkPatientExists(appointment.patient_id);
      await utils.checkAppointmentIsFree(appointment.appointment_id);

      const appointment_model: AppointmentResponseType = await database.appointments.update({
        select: {
          id: true,
          doctor_id: true,
          patient_id: true,
          date: true,
          initial_time: true,
          end_time: true,
        },
        where: { id: appointment.appointment_id },
        data: { patient_id: appointment.patient_id },
      });

      return appointment_model;
    } catch (error) {
      handleError(error);
    }
  }

  async cancelAppointment(appointment: AppointmentRequestType): Promise<AppointmentResponseType | undefined> {
    try {
      await utils.checkPatientExists(appointment.patient_id);
      await utils.checkAppointmentBelongsToPatient(
        appointment.appointment_id,
        appointment.patient_id,
      );

      const appointment_model = await database.appointments.update({
        select: {
          id: true,
          doctor_id: true,
          patient_id: true,
          date: true,
          initial_time: true,
          end_time: true,
        },
        where: { id: appointment.appointment_id },
        data: { patient_id: null },
      });

      return appointment_model;
    } catch (error) {
      handleError(error);
    }
  }
}

export default new AppointmentActions();
