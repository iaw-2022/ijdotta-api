import { NextFunction, Request, Response } from "express";
declare class DoctorHandler {
    getDoctors(req: Request, res: Response, next: NextFunction): Promise<false | undefined>;
    getAppointments(req: Request, res: Response, next: NextFunction): Promise<false | undefined>;
}
declare const _default: DoctorHandler;
export default _default;
