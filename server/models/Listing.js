const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    // Display price (range shown before unlock)
    displayPrice: {
        type: String,
        required: true
    },
    // Verified exact price (shown after ₹199 deposit)
    verifiedPrice: {
        type: String,
        required: true
    },
    isPriceVerified: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
        required: true
    },
    builderName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specs: {
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true
        },
        area: {
            type: String,
            required: true
        }
    },
    // Unit availability
    totalUnits: {
        type: Number,
        required: true,
        default: 1
    },
    availableUnits: {
        type: Number,
        required: true,
        default: 1
    },
    image: {
        type: String,
        required: true
    },
    amenities: [{
        type: String
    }],
    // Deposit required to unlock price
    depositRequired: {
        type: Number,
        default: 199
    },
    // Builder listing fee status
    listingFeeStatus: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'paid' // For now, assume paid
    },
    listingFeePaid: {
        type: Number,
        default: 999
    },
    // Builder ID reference
    builderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Listing', listingSchema);
