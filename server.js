const app = require('./app');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//Server file to catch incorrect routes:
app.use((req, res) => {
  res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected (server.js)');
  })
  .catch((err) => {
    console.error('MongoDB connection error(server.js):', err.message);
    process.exit(1);
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, URL:http://localhost:${PORT}`);
});
