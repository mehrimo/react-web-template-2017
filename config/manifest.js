const config = require('./');

module.exports = {
  name: config.APP_NAME,
  short_name: 'React Web',
  description: 'React web app boilerplate with redux',
  orientation: 'landscape',
  display: 'standalone',
  start_url: '/',
  background_color: '#ffffff',
  icons: [
    {
      src: '/favicon.ico',
      size: '89x89',
      type: 'image/png',
    },
  ],
};
