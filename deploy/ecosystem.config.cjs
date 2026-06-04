module.exports = {
  apps: [
    {
      name: "bellbee-media",
      script: "server.ts",
      interpreter: "node",
      node_args: "--import remix/node-tsx",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 44100
      }
    }
  ]
};
