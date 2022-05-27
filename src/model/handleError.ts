import CodedError from "~/errors"

const handleError = function(error: any) {
    if (error.isCodedError) {
        throw error
    }
    else {
        throw new CodedError('NOT_DEFINED', 500, `Unkwown error.`);
    }
}

export default handleError;