require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const loggerMiddlware = require('./middleware/logger.middleware');
const errorMiddleware = require('./middleware/error.middleware');
const connectDB = require('./database/connection');

const PORT = 3000;
connectDB();

//middleware
app.use(express.json());
app.use(loggerMiddlware); // register logger middleware




//register the routes
app.use(userRoutes);
app.use(errorMiddleware);


app.get('/', (req, res) => {
    res.send('Server is running')
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
