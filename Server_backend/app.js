const express = require('express');
const connectDB = require('./database/db');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use('/auth', authRoutes);
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});