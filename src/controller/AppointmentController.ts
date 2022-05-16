import { AppointmentRequestType, AppointmentSearchRequestType } from "~/types/appointment";
import database from "~/model/prisma";
import { appointments, patients } from "@prisma/client";

const findPatient = async function(id: bigint): Promise<patients | null> {
    return await database.patients.findUnique({
        where: {
            id,
        }
    });
}

class AppointmentController {

    async findAll(appointment: AppointmentSearchRequestType): Promise<Array<appointments>> {
        let where: any = {};
        const {doctor_id, patient_id, from, to, free} = appointment;
        if (!!doctor_id) where.doctor_id = doctor_id;
        if (!!patient_id) where.patient_id = patient_id;
        if (!!from) where.date.gte = from;
        if (!!to) where.date.lte = to;
        if (free) where.patient_id = null;

        console.log(where);

        const appointments = await database.appointments.findMany({
            where
        });

        return appointments;
    }

    async bookAppointment(appointment: AppointmentRequestType): Promise<appointments> {
        if (findPatient(appointment.patient_id) == null) {
            throw new Error(`Patient with id ${appointment.patient_id} does not exist.`);
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

export default new AppointmentController();