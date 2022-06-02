import { patients } from '@prisma/client';
declare class ModelUtils {
    checkPatientExists(id: bigint): Promise<patients | undefined>;
    checkPatientDoesntExist(id: bigint): Promise<Boolean>;
    checkAppointmentExists(id: bigint): Promise<Boolean>;
    checkAppointmentIsFree(id: bigint): Promise<Boolean>;
    checkAppointmentBelongsToPatient(id: bigint, patient_id: bigint): Promise<Boolean>;
}
declare const _default: ModelUtils;
export default _default;
