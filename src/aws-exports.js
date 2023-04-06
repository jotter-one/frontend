const awsExports = {
    Auth: {
        userPoolId: "us-east-1_wjT6dH3AB",
        region: "us-east-1",
        userPoolWebClientId: "7i7h5rljnu29md0itos821grs0",
        oauth: {
            domain: "jotter-one.auth.us-east-1.amazoncognito.com",
            redirectSignIn: "http://localhost:3000/",
            redirectSignOut: "http://localhost:3000/",
            scope: ['email', 'profile', 'openid'],
            responseType: 'token',
        }
    },
};

export default awsExports;
