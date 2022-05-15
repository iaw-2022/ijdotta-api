import { Request, Response, NextFunction } from "express";

class AppointmentHandler {
    async bookAppointment(req: Request, res: Response, next: NextFunction) {}

    async cancelAppointment(req: Request, res: Response, next: NextFunction) {}
}

export default new AppointmentHandler();
