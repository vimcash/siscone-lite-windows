
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/(.*)',
        destination: 'http://localhost:8888yar',
      },
    ];
  },

  serverRuntimeConfig: {
    // Configuración adicional del servidor, si es necesario.
  },

  publicRuntimeConfig: {
    // Configuración accesible desde el lado del cliente.
  },
};