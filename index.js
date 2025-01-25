
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http"); // Import http module

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static("public"));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://monixjnnl:jennel24@expressnodeapp.e6mps.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if the database connection fails
  });

// Import API route
const submitLogin = require("./API/submit");

// Use API route
app.use("/submit", submitLogin);

// Create the HTTP server
const server = http.createServer(app);

// // Start the server
// const PORT = 5700;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// Start the server for Microsoft Azure or local
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");

// //new
// //const http = require('http');
// //const server = http.createServer(app);

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve static files
// app.use(express.static("public"));

// // Serve the HTML file
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://monixjnnl:jennel24@expressnodeapp.e6mps.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((error) => {
//     console.error("MongoDB Connection Error:", error.message);
//     process.exit(1); // Exit if the database connection fails
//   });

// // Import API route
// const submitLogin = require("./API/submit");

// // Use API route
// app.use("/submit", submitLogin); // Fixed typo in route registration

// // Start the server locally 
// const PORT = 5700;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



