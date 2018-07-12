const server = require('./server');
const mongoose = require('mongoose');
const { dbURL } = require('./config');
const port = 3030;

mongoose.connect(dbURL, {}, err => {
  if (err) throw new Error(err);
  console.log('Connected to database.');
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
