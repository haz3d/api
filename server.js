const express = require('express');
const app = express();

app.use('/api', require('./routes/api'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  });
  