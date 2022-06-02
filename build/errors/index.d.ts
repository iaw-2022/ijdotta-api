import CODES from './codes';
declare class CodedError extends Error {
    code: string;
    statusCode: number;
    message: string;
    readonly isCodedError = true;
    constructor(code: keyof typeof CODES, statusCode?: number, message?: string);
}
export { CodedError, CODES };
export default CodedError;
