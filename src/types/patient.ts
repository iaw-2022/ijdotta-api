export type PatientRequestType = {
    patient_id: bigint,
    email: string,
}

type NarrowTreatmentType = {
    title: string,
    description: string | null,
}

export type TreatmentGroupType = {
    date: Date,
    treatments: NarrowTreatmentType[],
}

export type PatientResponseType = {
    id: bigint,
    name: string,
    lastname: string,
    email: string,
    health_insurance_company: string | null,
    health_insurance_id: string | null,
}
