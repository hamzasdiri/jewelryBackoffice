// src/server.js
const app = require('./app');
const { connectDB } = require('./utils/db');

// Connect to the database and start the server
const PORT = process.env.PORT || 5000;

console.log('Server is starting...');

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
