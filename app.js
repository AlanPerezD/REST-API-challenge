const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})