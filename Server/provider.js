const { Verifier } = require('@pact-foundation/pact');

return new Verifier().verifyProvider({
  provider: 'server',
  providerBaseUrl: 'http://localhost:5001/posts/',

  pactBrokerUrl: 'https://atilla.pactflow.io',
  pactBrokerToken: '8WzFv0K-LXdVCggeYhgllA',

  publishVerificationResult: process.env.CI === 'true',
  providerVersion: process.env.GIT_COMMIT
});