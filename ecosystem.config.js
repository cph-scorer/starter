module.exports = {
  apps: [{
    name: "api",
    script: "pnpm run -C packages/api start:dev",
    env: {
      PORT: 8080
    }
  }, {
    name: "client",
    script: "pnpm run -C packages/client start",
    env: {
      PORT: 5000
    }
  }]
}
