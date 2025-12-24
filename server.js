const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseRouter = require('./routes/courserouter');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/courses', courseRouter);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/courseAPI')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));
