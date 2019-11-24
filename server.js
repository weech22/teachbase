const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/login', (req, res) => {
  const { login, password } = req.body;
  setTimeout(() => {
    if (login === 'admin' && password === 'qwerty') {
      res.send({ token: 'tokenstr' });
    } else {
      res.status(401);
      res.send({ error: 'Incorrect login or password' });
    }
  }, 1500);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
