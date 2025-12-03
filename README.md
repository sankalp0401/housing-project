# HousingPlus - Real Estate Listing Platform

A modern, full-stack real estate listing platform connecting property builders with potential buyers. Built with React, Node.js, and Express.

![HousingPlus Platform](https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80)

## 🌟 Features

### For Buyers
- **Browse Listings**: Search and filter properties by location, builder, or price
- **Detailed Views**: View comprehensive property details including specs, amenities, and images
- **Contact Builders**: Direct contact form to reach out to property builders
- **User Registration**: Create buyer account to save favorites and track inquiries

### For Builders
- **Dashboard**: Manage all your property listings in one place
- **Add Listings**: Easy-to-use form to post new properties
- **Builder Registration**: Register your company with verification details
- **Listing Management**: Edit and update property information

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Vanilla CSS** - Custom styling with Housing.com-inspired design

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd new\ project
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../client
npm install
```

4. **Environment Configuration**

Create a `.env` file in the `server` directory:
```env
PORT=5000
NODE_ENV=development
```

Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000
```

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
App runs on `http://localhost:5173`

### Production Build

**Build Frontend:**
```bash
cd client
npm run build
```

**Start Production Server:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
new project/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ListingCard.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── ListingForm.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Listings.jsx
│   │   │   ├── ListingDetails.jsx
│   │   │   ├── BuilderDashboard.jsx
│   │   │   ├── BuyerRegister.jsx
│   │   │   └── BuilderRegister.jsx
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── index.js           # Express server & API routes
    └── package.json
```

## 🔌 API Endpoints

### Listings
- `GET /api/listings` - Get all listings
- `GET /api/listings/:id` - Get single listing by ID
- `POST /api/listings` - Create new listing

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 Design Philosophy

The platform follows a clean, modern design inspired by Housing.com:
- **Clean Interface**: White-space heavy, easy to navigate
- **Prominent Search**: Search functionality front and center
- **Card-based Layouts**: Property listings in grid cards
- **Professional Color Palette**: Purple primary with teal accents
- **Responsive Design**: Works on all device sizes

## 🔐 Security Considerations

**Current Implementation (Development):**
- In-memory data storage
- No authentication/authorization
- Mock user registration

**For Production, Implement:**
- Database integration (MongoDB/PostgreSQL)
- JWT-based authentication
- Password hashing (bcrypt)
- Input validation and sanitization
- Rate limiting
- HTTPS/SSL certificates

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Set environment variable: `VITE_API_URL=<your-backend-url>`

### Backend (Heroku/Railway/Render)
1. Push code to Git repository
2. Connect to deployment platform
3. Set environment variables
4. Deploy

### Database Setup
Replace in-memory storage with:
- **MongoDB Atlas** (recommended for quick setup)
- **PostgreSQL** (for relational data)
- **Supabase** (for full backend-as-a-service)

## 📝 Future Enhancements

- [ ] User authentication & authorization
- [ ] Persistent database integration
- [ ] Image upload functionality
- [ ] Advanced search filters
- [ ] Favorites/Wishlist feature
- [ ] Email notifications
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Analytics & reporting
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Design inspiration from Housing.com
- Icons by Lucide React
- Images from Unsplash
