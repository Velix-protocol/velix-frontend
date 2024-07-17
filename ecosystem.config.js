module.exports = {
  apps: [
    {
      name: "velix-frontend",
      script: "serve",
      args: "-s dist -l 5173",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
