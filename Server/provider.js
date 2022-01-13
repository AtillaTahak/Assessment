const { Verifier } = require('@pact-foundation/pact');

return new Verifier().verifyProvider({
  provider: 'server',
  providerBaseUrl: 'http://13.57.246.185:3000',

  pactBrokerUrl: 'https://atilla.pactflow.io',
  pactBrokerToken: '8WzFv0K-LXdVCggeYhgllA',

  publishVerificationResult: process.env.CI === 'true',
  providerVersion: process.env.GIT_COMMIT
});