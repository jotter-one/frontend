import CookieStorage from './util/CookieStorage'
const awsExports = {
    Auth: {
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
        region: process.env.NEXT_PUBLIC_REGION,
        userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT,
        oauth: {
            domain: process.env.NEXT_PUBLIC_DOMAIN,
            redirectSignIn: process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN,
            redirectSignOut: process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT,
            scope: ['email', 'profile', 'openid'],
            responseType: 'token',
        },
        storage: CookieStorage,
    },
};


export default awsExports;