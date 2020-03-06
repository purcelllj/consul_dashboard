const express = require('express');
const rp = require('request-promise');
const app = express();
const conf = require('./conf');
const port = process.env.PORT || 8888;

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/services', async (req, res, next) => {
  const options = {
    rejectUnauthorized: false,
    method: 'GET',
    uri: 'https://consul-00.gc.local:8500/v1/catalog/services',
    headers: {
      'X-Consul-Token': `${conf.token}`
    }
  };
  let response;
  try {
    response = await rp(options);
  } catch (e) {
    next(e);
  }
  res.end(response);
});

app.get('/service_detail/:serviceName', async (req, res, next) => {
  const options = {
    rejectUnauthorized: false,
    method: 'GET',
    uri: `https://consul-00.gc.local:8500/v1/health/checks/${req.params.serviceName}`,
    headers: {
      'X-Consul-Token': `${conf.token}`
    }
  };
  let response;
  try {
    response = await rp(options);
  } catch (e) {
    next(e);
  }
  res.end(response);
});

app.listen(port, () => console.log(`listening on port ${port}`));
