import React, { useState, useEffect } from 'react';
import ListingCard from '../components/ListingCard';
import { Search, Filter } from 'lucide-react';
import { api } from '../utils/api';

const Listings = () => {
    const [allListings, setAllListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getListings()
            .then(data => {
                setAllListings(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching listings:', err);
                setLoading(false);
            });
    }, []);

    const filteredListings = allListings.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.builderName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="container fade-in" style={{ padding: '4rem 1rem', textAlign: 'center' }}>Loading properties...</div>;
    }

    return (
        <div className="container" style={{ padding: 'clamp(1.5rem, 3vw, 2rem) 1rem' }}>
            <div className="slide-up" style={{ marginBottom: '2rem' }}>
                <h1 className="section-title">All Properties</h1>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 250px', position: 'relative', minWidth: '200px' }}>
                        <Search style={{
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'var(--text-secondary)'
                        }} size={20} />
                        <input
                            type="text"
                            placeholder="Search properties..."
                            style={{ paddingLeft: '3rem' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline mobile-hide" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <Filter size={18} />
                        Filter
                    </button>
                </div>
            </div>

            <div className="fade-in" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
                {filteredListings.map((listing, idx) => (
                    <div key={listing.id} className={`scale-in stagger-${Math.min(idx + 1, 4)}`}>
                        <ListingCard listing={listing} />
                    </div>
                ))}
            </div>

            {filteredListings.length === 0 && (
                <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-secondary)' }}>
                    <p>No properties found matching your search.</p>
                </div>
            )}
        </div>
    );
};

export default Listings;
