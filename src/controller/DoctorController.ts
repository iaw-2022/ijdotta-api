import { DoctorAppointmentsRequestType, DoctorResponseType } from "~/types/doctor";
import { AppointmentResponseType } from "~/types/appointment";
import doctors from "~/model/actions/Doctors";

class DoctorController {

    async getDoctors(): Promise<Array<DoctorResponseType>> {
        return await doctors.getDoctors();
    }

    async getAppointments(doctor: DoctorAppointmentsRequestType): Promise<Array<AppointmentResponseType>> {
        return await doctors.getAppointments(doctor);
    }

}

export default new DoctorController();