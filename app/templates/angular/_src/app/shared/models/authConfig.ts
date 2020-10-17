import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://iam.test.thiqah.sa:4433/auth/realms/mci',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + `/ar`,
    postLogoutRedirectUri: window.location.origin,
    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: 'bi31i8yqOUehyEG9tACmA8C5HVpFpYZK',
    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email offline_access',
    disableAtHashCheck: true,
    skipIssuerCheck: true,
    strictDiscoveryDocumentValidation: false,
    customQueryParams: {
        response_mode: 'query',
    },
    fallbackAccessTokenExpirationTimeInSec: 60,
    logoutUrl: `https://iam.test.thiqah.sa:4433/auth/realms/mci/protocol/openid-connect/logout?client_id={{client_id}}&id_token={{id_token}}&redirect_uri=${window.location.origin}`,
    silentRefreshTimeout: 60000, // For faster testing
    timeoutFactor: 0.75, // For faster testing
    sessionChecksEnabled: false,
    showDebugInformation: false, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
};
