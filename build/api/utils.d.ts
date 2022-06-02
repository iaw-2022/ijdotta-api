import { NextFunction, Request, Response } from "express";
import CodedError from "~/errors";
declare class APIUtils {
    sendResponse(res: Response, payload: unknown, status?: number): Boolean;
    sendMethodNotFound(req: Request, res: Response, next: NextFunction): boolean;
    handleError(err: CodedError, req: Request, res: Response, next: NextFunction): boolean;
}
declare const _default: APIUtils;
export default _default;
