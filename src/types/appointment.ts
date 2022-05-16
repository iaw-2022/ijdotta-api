export type AppointmentRequestType = {
    patient_id: bigint,
    appointment_id?: bigint,
}

export type AppointmentSearchRequestType = {
    patient_id?: bigint,
    doctor_id?: bigint,
    from?: Date,
    to?: Date,
    free?: Boolean,
}