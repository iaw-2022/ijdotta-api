import CODES from './codes';

class CodedError extends Error {
  code = '';
  statusCode: number;
  message: string;
  readonly isCodedError = true;

  constructor(code: keyof typeof CODES, statusCode = 500, message: string = '') {
    super(code);
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { CodedError, CODES };
export default CodedError;
