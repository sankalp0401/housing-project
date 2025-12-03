require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Listing = require('./models/Listing');
const Contact = require('./models/Contact');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: true, // Allow all origins for local network access
    credentials: true
}));
app.use(bodyParser.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/housingplus';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        seedDatabase(); // Seed initial data if database is empty
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        console.log('⚠️  Running without database - using in-memory storage');
    });

// Seed function to populate initial data
async function seedDatabase() {
    try {
        const count = await Listing.countDocuments();
        if (count === 0) {
            console.log('📦 Seeding database with initial listings...');
            await Listing.insertMany([
                {
                    title: 'Luxury Apartment in Indiranagar',
                    displayPrice: '₹1.2 Cr - ₹1.5 Cr',
                    verifiedPrice: '₹1.35 Cr',
                    isPriceVerified: true,
                    address: 'Indiranagar, Bangalore',
                    builderName: 'Prestige Group',
                    description: 'Experience luxury living in the heart of Indiranagar. This spacious 3BHK apartment offers premium amenities, modern architecture, and proximity to the best schools and hospitals in the city.',
                    specs: {
                        bedrooms: 3,
                        bathrooms: 3,
                        area: '1850 sq.ft'
                    },
                    totalUnits: 24,
                    availableUnits: 8,
                    depositRequired: 199,
                    listingFeeStatus: 'paid',
                    listingFeePaid: 999,
                    image: 'https://images.unsplash.com/photo-1600596542815-27bfef40d396?auto=format&fit=crop&w=1200&q=80',
                    amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Power Backup', 'Clubhouse', 'Children\'s Play Area']
                },
                {
                    title: 'Spacious Villa in Whitefield',
                    displayPrice: '₹2.8 Cr - ₹3.5 Cr',
                    verifiedPrice: '₹3.2 Cr',
                    isPriceVerified: true,
                    address: 'Whitefield, Bangalore',
                    builderName: 'Sobha Developers',
                    description: 'A beautiful villa with a private garden and modern interiors.',
                    specs: {
                        bedrooms: 4,
                        bathrooms: 4,
                        area: '3200 sq.ft'
                    },
                    totalUnits: 12,
                    availableUnits: 3,
                    depositRequired: 199,
                    listingFeeStatus: 'paid',
                    listingFeePaid: 999,
                    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
                    amenities: ['Private Garden', 'Home Theater', 'Solar Power', 'Gated Community']
                },
                {
                    title: 'Modern Flat in Koramangala',
                    displayPrice: '₹85 L - ₹98 L',
                    verifiedPrice: '₹95 L',
                    isPriceVerified: true,
                    address: 'Koramangala, Bangalore',
                    builderName: 'Brigade Group',
                    description: 'Compact yet luxurious flat in the heart of the startup hub.',
                    specs: {
                        bedrooms: 2,
                        bathrooms: 2,
                        area: '1200 sq.ft'
                    },
                    totalUnits: 36,
                    availableUnits: 15,
                    depositRequired: 199,
                    listingFeeStatus: 'paid',
                    listingFeePaid: 999,
                    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                    amenities: ['Rooftop Garden', 'Co-working Space', 'Gym']
                }
            ]);
            console.log('✅ Database seeded successfully');
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

// Routes

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Server is running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Get all listings
app.get('/api/listings', async (req, res) => {
    try {
        const listings = await Listing.find().sort({ createdAt: -1 });
        res.json(listings);
    } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).json({ message: 'Error fetching listings' });
    }
});

// Get single listing
app.get('/api/listings/:id', async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.json(listing);
    } catch (error) {
        console.error('Error fetching listing:', error);
        res.status(500).json({ message: 'Error fetching listing' });
    }
});

// Create new listing
app.post('/api/listings', async (req, res) => {
    try {
        const newListing = new Listing({
            title: req.body.title,
            displayPrice: req.body.displayPrice || req.body.price,
            verifiedPrice: req.body.verifiedPrice || req.body.price,
            address: req.body.address,
            builderName: req.body.builderName || 'Unknown Builder',
            description: req.body.description,
            specs: {
                bedrooms: req.body.bedrooms,
                bathrooms: req.body.bathrooms,
                area: req.body.area
            },
            totalUnits: req.body.totalUnits || 1,
            availableUnits: req.body.availableUnits || 1,
            depositRequired: 199,
            listingFeeStatus: 'paid',
            image: req.body.image,
            amenities: req.body.amenities || []
        });

        const savedListing = await newListing.save();
        res.status(201).json(savedListing);
    } catch (error) {
        console.error('Error creating listing:', error);
        res.status(500).json({ message: 'Error creating listing' });
    }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
            listingTitle: req.body.listingTitle
        });

        await newContact.save();
        console.log('New Contact Request:', newContact);
        res.status(200).json({ message: 'Contact request received successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Error saving contact request' });
    }
});

// Register user (buyer or builder) - NOW WITH RERA NUMBER
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, phone, password, userType, companyName, registrationNumber, reraNumber } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        const newUser = new User({
            name,
            email,
            phone,
            password, // In production, hash this with bcrypt!
            userType,
            companyName,
            registrationNumber,
            reraNumber
        });

        await newUser.save();
        res.status(201).json({
            message: 'Registration successful',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                userType: newUser.userType
            }
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error during registration' });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🏛️  RERA compliance enabled for builder verification`);
});
