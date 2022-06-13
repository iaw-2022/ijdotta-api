import { PatientResponseType } from "~/types/patient";
import patients from "~/model/actions/Patients";
import CodedError from "~/errors";

type Identity = {
    patient_id: bigint, 
    email: string
}

const checkAccessRights = async function(request: Identity, patient: PatientResponseType | undefined = undefined) {
    try {
        if (patient === undefined) {
            patient = await patients.getProfile(request);
        }
        if (patient.email !== request.email) {
            throw new CodedError("UNAUTHORIZED_ACTION", 403, `You have not permission to access pateint's ${request.patient_id} information.`);
        }
    } catch (error) {
        throw error;   
    }
}

export { checkAccessRights };