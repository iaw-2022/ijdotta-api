import { auth } from 'express-oauth2-jwt-bearer';
import CONFIG from '~/config';
import SECURITY from '~/constants/security';
import RateLimit from 'express-rate-limit';
import ERROR_CODES from '~/errors/codes';

const checkJwt = auth({
    audience: CONFIG.AUTH0.AUDIENCE,
    issuerBaseURL: CONFIG.AUTH0.ISSUER_BASE_URL,
});

const rateError = () =>
    JSON.stringify({
        errorCode: ERROR_CODES.API_REQUESTS_TOO_OFTEN,
        error: "Requests to API are too often.",
    });

const rateLimit = RateLimit({
    windowMs: SECURITY.RATE_LIMIT.WINDOW_MS,
    max: SECURITY.RATE_LIMIT.MAX,
    message: rateError(),
});



export { checkJwt, rateLimit };
