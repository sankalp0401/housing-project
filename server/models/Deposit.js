const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    listingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 199
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'refunded'],
        default: 'pending'
    },
    paymentId: {
        type: String // For future payment gateway integration
    },
    priceUnlocked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    refundedAt: {
        type: Date
    }
});

module.exports = mongoose.model('Deposit', depositSchema);
