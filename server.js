const express = require('express');
const rp = require('request-promise');
const app = express();
const conf = require('./conf');
const port = process.env.PORT || 8888;

app.get('/services', async (req, res) => {
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
    throw new Error(e);
  }
  res.end(response);
});

app.listen(port, () => console.log(`listening on port ${port}`));