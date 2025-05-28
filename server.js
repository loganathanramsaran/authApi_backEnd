const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//Server file to catch incorrect routes:
app.use((req, res) => {
  res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, URL:http://localhost:${PORT}`);
});
