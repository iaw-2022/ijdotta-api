import { Request, Response, NextFunction } from 'express';
declare class PatientHandler {
    createProfile(req: Request, res: Response, next: NextFunction): Promise<false | Boolean>;
    getProfile(req: Request, res: Response, next: NextFunction): Promise<false | Boolean>;
    getAppointments(req: Request, res: Response, next: NextFunction): Promise<false | Boolean>;
    getTreatments(req: Request, res: Response, next: NextFunction): Promise<false | Boolean>;
}
declare const _default: PatientHandler;
export default _default;
