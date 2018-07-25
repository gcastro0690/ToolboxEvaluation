const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routers = require('./routes');

const server = () => {
  const isProd = process.env.NODE_ENV === 'production';
  console.log('isProd=', isProd);
  var deployPath = process.env.DEPLOY_PATH || '';
  const port = process.env.PORT || 3001;

  // Setup server
  const app = express();

  if (isProd) {
    // Static files
    app.use(deployPath, express.static(path.resolve(__dirname, '../dist')));
  }

  app.use(bodyParser.json());
  app.use(`${deployPath}/api/ping`, routers.ping);

  // All remaining requests return the React app, so it can handle routing.
  if (isProd) {
    // Serve app
    //app.use(deployPath, routers.views);
  }

  app.locals.port = port;
  app.listen(port);
  return app;
};

module.exports = server;
