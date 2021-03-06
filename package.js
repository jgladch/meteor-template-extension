Package.describe({
  name: "aldeed:template-extension",
  summary: "Adds template features currently missing from the templating package",
  version: "3.3.0",
  git: "https://github.com/aldeed/meteor-template-extension.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use([
    'templating',
    'blaze',
    'jquery',
    'tracker'
  ], 'client');

  api.addFiles(['template-extension.js'], 'client');
});

Package.onTest(function(api) {
  api.use([
    'aldeed:template-extension',
    'templating',
    'tinytest',
    'test-helpers',
    'ejson',
    'underscore'
  ], 'client');

  api.addFiles(['tests.html', 'tests.js'], 'client');
});
