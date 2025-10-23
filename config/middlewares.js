module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'https://frontend-inmobiliaria.vercel.app'],
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'api.mapbox.com'],
          'img-src': ["'self'", 'data:', 'blob:'],
          'media-src': ["'self'", 'data:', 'blob:'],
          'worker-src': ['blob:'],
          upgradeInsecureRequests: null,
        },
      }
    },
  },
  {
    name: 'strapi::cors',
    config: {
     origin: ['https://frontend-inmobiliaria.vercel.app'], // Desactivado temporalmente: permite solicitudes solo desde el frontend en producción (Vercel) // <- importante
      //origin: ['http://localhost:1337', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

