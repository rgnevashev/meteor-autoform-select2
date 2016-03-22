
Package.describe({
  name: 'rgnevashev:autoform-select2',
  summary: 'Custom select2 input type for AutoForm',
  version: '4.0.2',
  git: 'https://github.com/rgnevashev/meteor-autoform-select2.git'
});

Package.onUse(function(api) {
  api.use([
    'templating@1.1.5',
    'aldeed:template-extension@4.0.0',
    'aldeed:autoform@4.0.0 || 5.0.0',
    'rgnevashev:select2@4.0.2'
  ]);
  api.addFiles([
    'autoform-select2.html',
    'autoform-select2.js'
  ], 'client');
});
