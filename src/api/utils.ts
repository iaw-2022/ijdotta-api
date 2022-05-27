import { NextFunction, Request, Response } from "express";
import { noop } from 'lodash';
import CodedError from "~/errors";

type APIResponse = {
    success: boolean,
    payload?: unknown,
    error?: string,
    errorCode?: string,
}

class APIUtils {

    sendResponse(res: Response, payload: unknown, status = 200): Boolean {
        const response: APIResponse = {
            success: true,
            payload
        };

        res.statusCode = status;
        res.json(response);
        return true;
    }

    sendMethodNotFound(req: Request, res: Response, next: NextFunction): boolean {
        noop(req);
        noop(next);

        const response: APIResponse = {
            success: false,
            error: 'Method not found.',
        }

        res.statusCode = 400;
        res.json(response);

        return true;
    }

    handleError(err: CodedError, req: Request, res: Response, next: NextFunction): boolean {
        noop(req);
        noop(next);

        const response: APIResponse = {
            success: false,
            errorCode: err.code,
            error: err.message,
        }

        res.statusCode = err.statusCode;
        res.json(response);
        return false;
    }

}

export default new APIUtils();