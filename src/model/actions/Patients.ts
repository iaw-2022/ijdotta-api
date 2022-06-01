import { PatientProfileRequestType, PatientRequestType, PatientResponseType, TreatmentGroupType } from '~/types/patient';
import database from '~/model/prisma';
import { AppointmentResponseType } from '~/types/appointment';
import utils from './utils';
import CodedError from '~/errors';
import handleError from '../handleError';

class PatientActions {
  async createProfile(profile: PatientProfileRequestType): Promise<PatientResponseType | undefined> {
    try {
      await utils.checkPatientDoesntExist(profile.id);
      const patient = database.patients.create({
        data: profile
      });
      return patient;
    } catch (error) {
      handleError(error);
    }
  }

  async linkProfile(profileLink: PatientRequestType): Promise<PatientResponseType | undefined> {
    try {
      await utils.checkPatientExists(profileLink.patient_id);
      const patient = database.patients.update({
        where: {
          id: profileLink.patient_id,
        },
        data: {
          email: profileLink.email,
        }
      });
      return patient;
    } catch (error) {
      handleError(error);
    }
  }

  async getVerificationCode(patient: PatientRequestType): Promise<number | undefined> {
    try {
      const patient_model = await utils.checkPatientExists(patient.patient_id);
      return patient_model?.verification_code;
    } catch (error) {
      handleError(error);
    }
  }

  async getProfile(patient: PatientRequestType): Promise<PatientResponseType> {

    try {
      const patient_model = await database.patients.findUnique({ where: { id: patient.patient_id } });
  
      if (patient_model == null) {
        throw new CodedError('PATIENT_NOT_FOUND', 404, `Patient with id ${patient.patient_id} does not exist.`);
      }
  
      return patient_model;
      
    } catch (error) {
      throw error;
    }

  }

  async getAppointments(patient: PatientRequestType): Promise<Array<AppointmentResponseType>> {
    try {
      utils.checkPatientExists(patient.patient_id);

      const appointments = await database.appointments.findMany({
        where: { patient_id: patient.patient_id },
      });
  
      return appointments;

    } catch (error) {
      throw error;
    }
  }

  async getTreatments(patient: PatientRequestType): Promise<Array<TreatmentGroupType>> {
    try {
      utils.checkPatientExists(patient.patient_id);

      const treatments = await database.stories.findMany({
        select: {
          date: true,
          treatments: {
            select: {
              title: true,
              description: true,
            },
          },
        },
        where: {
          patient_id: patient.patient_id,
        },
      });
  
      return treatments;
    } catch (error) {
      throw error;
    }
  }
}

export default new PatientActions();
