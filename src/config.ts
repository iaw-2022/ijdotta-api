const CONFIG = {

  AUTH0: {
    AUDIENCE: process.env.AUDIENCE,
    ISSUER_BASE_URL: process.env.ISSUER_BASE_URL,
    EMAIL_NAMESPACE: process.env.AUDIENCE + 'email',
  }

}

export default CONFIG;