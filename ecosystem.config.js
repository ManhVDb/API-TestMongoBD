module.exports = {
  apps : [{
    script: 'app.js',
    exec_mode: 'cluster',
    instances: 2,
    autorestart: true,

    env_production: {
      NODE_ENV: 'production'
    },
  }],

  deploy : {
    production : {
      user : 'master',
      host : '10.2.65.34',
      ref  : 'origin/master',
      repo : 'ducmanh2499@gmail.com:repo/repo.git',
      path : '/home/master',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js ',
    },
    // staging: {
    //   user: 'deploy',
    //   host: '10.2.65.34',
    //   ref: 'origin/develop',
    //   repo: 'ducmanh2499@gmail.com:repo/repo.git',
    //   path: '/home/master',
    //   ssh_options: ['PasswordAuthentication=no', 'StrictHostKeyChecking=no'],
    //   'post-deploy': 'cd /path/to/project && yarn --production=false;yarn build;pm2 startOrReload ecosystem.config.js',
    //   env: {
    //       NODE_ENV: 'production',
    //   },
    // }
  }
};
