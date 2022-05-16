export type PatientRequestType = {
    patient_id: bigint,
}

type NarrowTreatmentType = {
    title: string,
    description: string | null,
}

export type TreatmentGroupType = {
    date: Date,
    treatments: NarrowTreatmentType[],
}
