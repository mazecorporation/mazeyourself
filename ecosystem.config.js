module.exports = {
  apps: [
    {
      name: 'backend',
      script: './dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '700M',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: "frontend",
      script: "serve",
      env: {
        NODE_ENV: "production",
      },
      args: "-s build -l 3000",
    },
  ],
};
