import { Provider } from 'oidc-provider';

const clients = [
    {
        client_id: 'your-client-id',
        client_secret: 'your-client-secret',
        grant_types: ['authorization_code'],
        redirect_uris: ['http://localhost:3000/cb'],
    },
];

const oidc = new Provider('http://localhost:3000', {
    clients,
    features: {
        introspection: { enabled: true },
        revocation: { enabled: true },
    },
    formats: {
        AccessToken: 'jwt',
    },
});

export default oidc;