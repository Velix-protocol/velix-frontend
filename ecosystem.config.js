module.exports = {
  apps: [
    {
      name: 'velix-frontend',
      script: 'serve',
      args: '-s dist -l 5173', // Adjust the port number if needed
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

