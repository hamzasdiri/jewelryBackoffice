const app = require('../src/app'); // Import the Express app
const { connectDB } = require('../src/utils/db'); // Connect to the database
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
});

// Export the app for Vercel
module.exports = app;
