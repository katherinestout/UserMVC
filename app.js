const express = require('express');
//const mongoose = require('mongoose');

const app = express();

// Normal way of routes
//app.use('/api/user', require('./routes/api/user'));

const UserControl = require('./controller/UserControl');

//routes
app.get('/api/user/test', UserControl.test);
app.get('/api/get', UserControl.get);
app.put('/api/user/put', UserControl.put);
app.post('/api/user/post', UserControl.post);
app.delete('/api/user/delete', UserControl.delete);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));