const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./v1/userRoutes');
app.use('/api/v1/users', userRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});