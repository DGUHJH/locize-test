module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },
  backend: {
    projectId: '07633499-7fb3-42fd-8b81-f18f679c0e6d',
    // apiKey: 'myApiKey', // to not add the api-key in production, used for saveMissing feature
    referenceLng: 'ko',
  },
  use: [require('i18next-locize-backend/cjs')],
  ns: ['test'], // the namespaces needs to be listed here, to make sure they got preloaded
  serializeConfig: false, // because of the custom use i18next plugin
  // debug: true,
  // saveMissing: true, // to not saveMissing to true for productio
};
