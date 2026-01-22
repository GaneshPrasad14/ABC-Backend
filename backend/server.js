const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/uploads', express.static('uploads'));

// Connect DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB Connected');

        // Seed Default Admin if not exists
        const adminExists = await User.findOne({ username: 'admin@abcsolutions.in' });
        if (!adminExists) {
            const admin = new User({
                username: 'admin@abcsolutions.in',
                password: 'praveen@abcsolutions$',
            });
            await admin.save();
            console.log('Default admin created: admin@abcsolutions.in / praveen@abcsolutions$');
        }
    })
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
