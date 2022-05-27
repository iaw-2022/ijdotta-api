import { Request } from 'express';
import CodedError from '~/errors';
import { AppointmentRequestType, AppointmentSearchRequestType } from '~/types/appointment';
import { DoctorAppointmentsRequestType } from '~/types/doctor';
import { PatientRequestType } from '~/types/patient';

const parseDoctorRequest = function (req: Request): DoctorAppointmentsRequestType {
  try {
    return {
      id: BigInt(req.params.id),
    };
  } catch (error: any) {
    throw new CodedError('API_INVALID_PARAMS', 400, error.message);
  }
};

const parsePatientRequest = function (req: Request): PatientRequestType {
  try {
    return {
      patient_id: BigInt(req.params.id),
    };
  } catch (error: any) {
    throw new CodedError('API_INVALID_PARAMS', 400, error.message);
  }
};

const parseAppointmentSearchRequest = function (req: Request): AppointmentSearchRequestType {
  try {
    // Cast query to string or null
    const query: Record<any, string | undefined> = req.query as Record<any, unknown> as Record<
      any,
      string | undefined
    >;
    const { patient_id, doctor_id, from, to, free } = Object.assign(
      query,
      Object.keys(query).forEach((key) => {
        query[key] = query[key] === 'null' ? undefined : String(query[key]);
      }),
    );

    return {
      patient_id: patient_id ? BigInt(patient_id) : undefined,
      doctor_id: doctor_id ? BigInt(doctor_id) : undefined,
      from: from ? new Date(from) : undefined,
      to: to ? new Date(to) : undefined,
      free: free === 'true',
    };
  } catch (error: any) {
    throw new CodedError('API_INVALID_PARAMS', 400, error.message);
  }
};

const parseAppointmentRequest = function (req: Request): AppointmentRequestType {
  try {
    const appointment: AppointmentRequestType = req.body;
    appointment.appointment_id = BigInt(req.params.id);

    return appointment;
  } catch (error: any) {
    throw new CodedError('API_INVALID_PARAMS', 400, error.message);
  }
};

export {
  parseAppointmentRequest,
  parseAppointmentSearchRequest,
  parseDoctorRequest,
  parsePatientRequest,
};
