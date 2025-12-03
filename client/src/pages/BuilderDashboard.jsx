import React, { useState } from 'react';
import ListingForm from '../components/ListingForm';
import ListingCard from '../components/ListingCard';
import { PlusCircle, LayoutDashboard } from 'lucide-react';

const BuilderDashboard = () => {
    const [activeTab, setActiveTab] = useState('listings'); // 'listings' or 'add'

    // Mock data for builder's listings
    const [myListings, setMyListings] = useState([
        {
            id: 1,
            title: 'Luxury Apartment in Indiranagar',
            price: '1.5 Cr',
            address: 'Indiranagar, Bangalore',
            builderName: 'Prestige Group', // In real app, this would be current user
            image: 'https://images.unsplash.com/photo-1600596542815-27bfef40d396?auto=format&fit=crop&w=800&q=80'
        }
    ]);

    const handleAddListing = (newListing) => {
        const listing = {
            ...newListing,
            id: myListings.length + 1,
            builderName: 'Prestige Group' // Mock current user
        };
        setMyListings([...myListings, listing]);
        setActiveTab('listings');
        alert('Listing added successfully!');
    };

    return (
        <div className="container fade-in" style={{ padding: 'clamp(1.5rem, 3vw, 2rem) 1rem' }}>
            <div className="slide-up" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <h1 className="section-title" style={{ marginBottom: 0 }}>Builder Dashboard</h1>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                        className={`btn ${activeTab === 'listings' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setActiveTab('listings')}
                        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: '1 0 auto' }}
                    >
                        <LayoutDashboard size={18} />
                        My Listings
                    </button>
                    <button
                        className={`btn ${activeTab === 'add' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setActiveTab('add')}
                        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: '1 0 auto' }}
                    >
                        <PlusCircle size={18} />
                        Add New Listing
                    </button>
                </div>
            </div>

            {activeTab === 'listings' ? (
                <div className="fade-in">
                    {myListings.length > 0 ? (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                            gap: 'clamp(1.5rem, 3vw, 2rem)'
                        }}>
                            {myListings.map((listing, idx) => (
                                <div key={listing.id} className={`scale-in stagger-${idx + 1}`}>
                                    <ListingCard listing={listing} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                            <p>You haven't posted any listings yet.</p>
                            <button
                                className="btn btn-primary scale-in"
                                style={{ marginTop: '1rem' }}
                                onClick={() => setActiveTab('add')}
                            >
                                Post Your First Listing
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="slide-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <ListingForm onSubmit={handleAddListing} />
                </div>
            )}
        </div>
    );
};

export default BuilderDashboard;
