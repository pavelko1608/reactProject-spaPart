module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : 'spaPart',
      script    : 'index.js',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'spa',
      host : '207.154.244.129',
      ref  : 'origin/master',
      repo : 'https://github.com/pavelko1608/reactProject-spaPart.git',
      path : '/home/spa/spaPart',
      'post-deploy' : 'nvm install && npm install && /home/spa/.nvm/versions/node/v6.10.3/bin/pm2 reload ecosystem.config.js --env production'
    }
  }
};
