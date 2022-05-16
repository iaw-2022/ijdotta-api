import { Response } from "express";

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

}

export default new APIUtils();