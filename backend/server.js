const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');

app.use(express.json());

const PORT = 3000;
//register the routes
app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('Server is running')
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
