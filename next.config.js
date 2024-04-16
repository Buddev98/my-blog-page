const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nodeExpressProject',
        mongodb_password: 'nodeExpressProject',
        mongodb_clustername: 'nodeexpressprojects',
        mongodb_database: 'my-site-dev'
      }
    };
  }
  return {
    env: {
      mongodb_username: 'nodeExpressProject',
      mongodb_password: 'nodeExpressProject',
      mongodb_clustername: 'nodeexpressprojects',
      mongodb_database: 'my-site'
    }
  }
} 