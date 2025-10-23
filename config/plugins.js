module.exports = ({ env }) => ({
  "map-field": {
    enabled: true,
    config: {
      token: env("STRAPI_ADMIN_MAPBOX_ACCESS_TOKEN"),
      default_center: [-64.729, -21.535], // Coordenadas de Tarija
      default_zoom: 13,
      fullscreenControl: true,
      geocoder: true,
    },
  },
  
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_CLOUD_NAME'),
      api_key: env('CLOUDINARY_API_KEY'),
      api_secret: env('CLOUDINARY_API_SECRET'),
    },
  },
});
