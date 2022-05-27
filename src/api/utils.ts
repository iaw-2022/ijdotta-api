import { NextFunction, Request, Response } from "express";
import { noop } from 'lodash';
import CodedError from "~/errors";

type APIError = {
    errorCode: string,
    error: string,
}

class APIUtils {

    sendResponse(res: Response, payload: unknown, status = 200): Boolean {
        res.status(status).json(payload);
        return true;
    }

    sendMethodNotFound(req: Request, res: Response, next: NextFunction): boolean {
        noop(req);
        noop(next);

        const response: APIError = {
            errorCode: 'API_METHOD_NOT_FOUND',
            error: 'Method not found.',
        }

        res.status(400).json(response);
        return true;
    }

    handleError(err: CodedError, req: Request, res: Response, next: NextFunction): boolean {
        noop(req);
        noop(next);

        const response: APIError = {
            errorCode: err.code,
            error: err.message,
        }

        res.status(err.statusCode).json(response);
        return false;
    }

}

export default new APIUtils();