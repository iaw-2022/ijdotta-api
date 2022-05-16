import { appointments, patients } from "@prisma/client";
import { PatientRequestType, TreatmentGroupType } from "~/types/patient";
import database from "~/model/prisma";

const findPatient = async function(id: bigint): Promise<patients | null> {
    return await database.patients.findUnique({
        where: {
            id,
        }
    });
}

class PatientController {
    async getProfile(patient: PatientRequestType): Promise<patients> {
        const patient_model = await database.patients.findUnique({
            where: {
                id: patient.patient_id
            }
        });

        if (patient_model == null) {
            throw new Error(`Patient with id ${patient.patient_id} does not exist.`);
        }

        return patient_model;
    }

    async getAppointments(patient: PatientRequestType): Promise<Array<appointments>> {
        if (await findPatient(patient.patient_id) == null) {
            throw new Error(`Patient with id ${patient.patient_id} does not exist.`);
        }

        const appointments = await database.appointments.findMany({
            where: {
                patient_id: patient.patient_id,
            }
        });

        return appointments;
    }

    async getTreatments(patient: PatientRequestType): Promise<Array<TreatmentGroupType>> {
        if (await findPatient(patient.patient_id) == null) {
            throw new Error(`Patient with id ${patient.patient_id} does not exist.`);
        }

        const treatments = await database.stories.findMany({
            select: {
                date: true,
                treatments: {
                    select: {
                        title: true,
                        description: true,
                    }
                }
            },
            where: {
                patient_id: patient.patient_id,
            }
        });

        return treatments;
    }
}

export default new PatientController();