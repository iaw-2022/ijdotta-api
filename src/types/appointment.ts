export type AppointmentRequestType = {
    patient_id: bigint,
    appointment_id: bigint,
}

export type AppointmentSearchRequestType = {
    patient_id?: bigint,
    doctor_id?: bigint,
    from?: Date,
    to?: Date,
    free?: Boolean,
}

export type AppointmentResponseType = {
    id: bigint,
    doctor_id: bigint,
    patient_id?: bigint | null,
    date: Date,
    initial_time: Date,
    end_time: Date,
}