import { PatientResponseType } from "~/types/patient";
declare type Identity = {
    patient_id: bigint;
    email: string;
};
declare const checkAccessRights: (request: Identity, patient?: PatientResponseType | undefined) => Promise<void>;
export { checkAccessRights };
