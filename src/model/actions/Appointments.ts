import { AppointmentRequestType, AppointmentResponseType, AppointmentSearchRequestType } from "~/types/appointment";
import database from "~/model/prisma";
import { appointments, patients } from "@prisma/client";

const findPatient = async function(id: bigint): Promise<patients | null> {
    return await database.patients.findUnique({
        where: {
            id,
        }
    });
}

class AppointmentActions {

    async findAll(appointment: AppointmentSearchRequestType): Promise<Array<AppointmentResponseType>> {
        let where: any = {};
        const {doctor_id, patient_id, from, to, free} = appointment;
        if (doctor_id) where.doctor_id = doctor_id;
        if (patient_id) where.patient_id = patient_id;
        else if (free) where.patient_id = null;
        if (from || to) {
            where.date = {};
            if (from) where.date.gte = from;
            if (to) where.date.lte = to;
        }

        console.log('where: ');
        console.log(where);

        const appointments: AppointmentResponseType[] = await database.appointments.findMany({
            select: {
                id: true,
                doctor_id: true,
                patient_id: true,
                date: true,
                initial_time: true,
                end_time: true,
            },
            where,
        });

        return appointments;
    }

    async bookAppointment(appointment: AppointmentRequestType): Promise<appointments> {
        if (await findPatient(appointment.patient_id) == null) {
            throw new Error(`Patient with id ${appointment.patient_id} does not exist.`);
        }

        const app = await database.appointments.findUnique({
            where: {
                id: appointment.appointment_id,
            }
        });
        if (!!(app?.patient_id)) {
            throw new Error(`Appointment with id ${appointment.appointment_id} is not free.`);
        }

        const appointment_model = await database.appointments.update({
            where: {
                id: appointment.appointment_id,
            },
            data: {
                patient_id: appointment.patient_id,
            }
        });

        if (appointment_model == null) {
            throw new Error(`Appointment with id ${appointment.appointment_id} does not exist.`);
        }

        return appointment_model;
    }

    async cancelAppointment(appointment: AppointmentRequestType): Promise<appointments> {
        if (findPatient(appointment.patient_id) == null) {
            throw new Error(`Patient with id ${appointment.patient_id} does not exist.`);
        }

        const appointment_model = await database.appointments.update({
            where: {
                id: appointment.appointment_id,
            },
            data: {
                patient_id: null,
            }
        });

        if (appointment_model == null) {
            throw new Error(`Appointment with id ${appointment.appointment_id} does not exist.`);
        }

        return appointment_model;
    }

}

export default new AppointmentActions();