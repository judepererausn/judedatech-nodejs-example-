const express = require("express");
const app = express();
const PORT = 3010;

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Jude DA Tech Node.js app running on port 3010!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

