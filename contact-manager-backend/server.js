const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to Contact Manager API');
});

// Contact Routes
const contactRoutes = require('./routes/contactRoutes');
console.log('contactRoutes loaded');
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
