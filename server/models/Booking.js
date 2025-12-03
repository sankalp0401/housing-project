const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    builderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    listingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    unitNumber: {
        type: String
    },
    bookingAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['initiated', 'confirmed', 'completed', 'cancelled'],
        default: 'initiated'
    },
    // Success fee (2% of booking amount)
    successFee: {
        type: Number,
        required: true
    },
    successFeePaid: {
        type: Boolean,
        default: false
    },
    // Booking timeline
    timeline: [{
        status: String,
        timestamp: Date,
        note: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    completedAt: {
        type: Date
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
