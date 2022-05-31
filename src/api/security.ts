import { auth } from 'express-oauth2-jwt-bearer';
import CONFIG from '~/config';

const checkJwt = auth({
  audience: CONFIG.AUTH0.AUDIENCE,
  issuerBaseURL: CONFIG.AUTH0.ISSUER_BASE_URL,
});

export { checkJwt }