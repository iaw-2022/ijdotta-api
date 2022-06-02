export declare type PatientRequestType = {
    patient_id: bigint;
    email: string;
};
declare type NarrowTreatmentType = {
    title: string;
    description: string | null;
};
export declare type TreatmentGroupType = {
    date: Date;
    treatments: NarrowTreatmentType[];
};
export declare type PatientResponseType = {
    id: bigint;
    name: string;
    lastname: string;
    email: string;
    health_insurance_company: string | null;
    health_insurance_id: string | null;
};
export declare type PatientProfileRequestType = PatientResponseType;
export {};
