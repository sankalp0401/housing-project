const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['buyer', 'builder'],
        required: true
    },
    // Builder-specific fields
    companyName: {
        type: String,
        required: function () { return this.userType === 'builder'; }
    },
    registrationNumber: {
        type: String,
        required: function () { return this.userType === 'builder'; }
    },
    reraNumber: {
        type: String,
        required: function () { return this.userType === 'builder'; },
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
