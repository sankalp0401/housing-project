# Database Setup Guide

## MongoDB Installation & Setup

### Option 1: Local MongoDB (Recommended for Development)

1. **Install MongoDB Community Edition**
   - Windows: Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Run the installer and follow the setup wizard
   - MongoDB will run as a Windows service automatically

2. **Verify Installation**
   ```bash
   mongod --version
   ```

3. **Create Environment File**
   - Copy `server/.env.example` to `server/.env`
   - The default local connection string is already set:
     ```
     MONGODB_URI=mongodb://localhost:27017/housingplus
     ```

4. **Start the Server**
   ```bash
   cd server
   npm run dev
   ```
   - The server will automatically connect to MongoDB
   - Initial data will be seeded on first run

### Option 2: MongoDB Atlas (Cloud - Free Tier)

1. **Create Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free tier

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "FREE" tier (M0)
   - Select your preferred region
   - Click "Create"

3. **Setup Database Access**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Set permissions to "Read and write to any database"

4. **Setup Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

6. **Update Environment File**
   - Create `server/.env` file (copy from `.env.example`)
   - Update `MONGODB_URI`:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/housingplus?retryWrites=true&w=majority
     ```

7. **Start the Server**
   ```bash
   cd server
   npm run dev
   ```

## Database Models

### Listing
- title, price, address, builderName
- description, specs (bedrooms, bathrooms, area)
- image, amenities
- createdAt

### Contact
- name, email, phone, message
- listingTitle, createdAt

### User
- name, email, phone, password
- userType (buyer/builder)
- companyName, registrationNumber (for builders)
- createdAt

## Troubleshooting

### "MongoDB connection error"
- **Local**: Ensure MongoDB service is running
  ```bash
  net start MongoDB
  ```
- **Atlas**: Check connection string, username, password, and IP whitelist

### "Database seeding failed"
- Check MongoDB is running
- Verify connection string in `.env`
- Check server logs for specific error

### Server runs but no database connection
- Server will fall back to in-memory storage
- Data will be lost on server restart
- Fix MongoDB connection to enable persistence

## Viewing Your Data

### Using MongoDB Compass (GUI)
1. Download from [mongodb.com/products/compass](https://www.mongodb.com/products/compass)
2. Connect using your connection string
3. Browse collections: `listings`, `contacts`, `users`

### Using MongoDB Shell
```bash
mongosh
use housingplus
db.listings.find()
db.contacts.find()
db.users.find()
```

## Production Deployment

For production, use MongoDB Atlas:
- Better security
- Automatic backups
- Scalability
- Free tier available
- No server maintenance

Update your deployment platform environment variables with the Atlas connection string.
