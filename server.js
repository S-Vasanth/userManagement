const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));


app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
