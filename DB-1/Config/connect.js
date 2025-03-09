const mongoose = require('mongoose');

const connect = async () => {
    try {
        const response = await mongoose.connect('mongodb://localhost:27017/DB-1', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected:', response.connection.host);
    } catch (error) {
        console.error('Database connection error:', error.message);
    }
};

module.exports = connect;
