import express = require('express');

// Create a new express app instance
const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded());
app.post('/remove', function (req, res) {
  console.log('req: ', req.body);
  res.send(req.body.driver);
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});