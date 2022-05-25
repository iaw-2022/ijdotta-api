import { NextFunction, Request, Response } from "express";
import { noop } from 'lodash';
import CodedError from "~/errors";

type APIResponse = {
    success: boolean,
    payload?: unknown,
    error?: string,
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

    handleError(err: Error, req: Request, res: Response, next: NextFunction): boolean {
        noop(req);
        noop(next);

        const response: APIResponse = {
            success: false,
            error: err.message,
        }

        let statusCode = 500;
        try {
            statusCode = err instanceof CodedError? err.statusCode : 500;
        } catch (err) {
           console.log(err);
        }
        
        res.statusCode = statusCode;
        res.json(response);
        return false;
    }

}

export default new APIUtils();