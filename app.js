const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Routes
app.use('/api/user', require('./routes/api/user'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));