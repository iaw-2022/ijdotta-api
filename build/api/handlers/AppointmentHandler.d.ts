import { Request, Response, NextFunction } from 'express';
declare class AppointmentHandler {
    findAll(req: Request, res: Response, next: NextFunction): Promise<false | undefined>;
    bookAppointment(req: Request, res: Response, next: NextFunction): Promise<false | Boolean>;
    cancelAppointment(req: Request, res: Response, next: NextFunction): Promise<false | Boolean>;
}
declare const _default: AppointmentHandler;
export default _default;
