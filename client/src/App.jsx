import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetails from './pages/ListingDetails';
import BuilderDashboard from './pages/BuilderDashboard';
import BuyerRegister from './pages/BuyerRegister';
import BuilderRegister from './pages/BuilderRegister';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/listings" element={<Listings />} />
                        <Route path="/listings/:id" element={<ListingDetails />} />
                        <Route path="/builder" element={<BuilderDashboard />} />
                        <Route path="/register/buyer" element={<BuyerRegister />} />
                        <Route path="/register/builder" element={<BuilderRegister />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
