import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: "dev-3ftgm5ln.us.auth0.com",
  clientID: "8NYzRq3Zy8bZeQoB1mWlWVMr89NfCBtL",
  redirectUri: 'http://localhost:8080/callback',
  responseType: "token id_token",
  scope: "openid profile"
});

let token = {};

const handleAuth = cb => {
  webAuth.parseHash((error, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry = new Date().getTime() + authResult.expiresIn * 1000;
      cb();
    } else {
      console.log(error);
    }
  });
};

const isLogged = () => {
  return token.accessToken;
};

const login = () => {
  webAuth.authorize();
};

const logUserOut = () => {
  token = {};
};

export { login, handleAuth, isLogged, logUserOut };
