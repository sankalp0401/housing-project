import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, ArrowLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { api } from '../utils/api';

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getListing(id)
            .then(data => {
                setListing(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching listing:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading details...</div>;
    }

    if (!listing) {
        return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Listing not found.</div>;
    }

    return (
        <div className="container fade-in" style={{ padding: 'clamp(1.5rem, 3vw, 2rem) 1rem' }}>
            <Link to="/listings" className="slide-in-left" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>
                <ArrowLeft size={18} />
                Back to Listings
            </Link>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
                <style>{`
                    @media (min-width: 1024px) {
                        .listing-details-grid {
                            grid-template-columns: 2fr 1fr !important;
                        }
                    }
                `}</style>
                {/* Left Column: Details */}
                <div className="slide-up">
                    <div style={{
                        height: 'clamp(250px, 50vw, 400px)',
                        borderRadius: 'var(--radius)',
                        overflow: 'hidden',
                        marginBottom: '2rem'
                    }}>
                        <img
                            src={listing.image}
                            alt={listing.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                            marginBottom: '1rem',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div>
                                <h1 style={{
                                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem'
                                }}>
                                    {listing.title}
                                </h1>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-secondary)',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                                }}>
                                    <MapPin size={18} />
                                    <span>{listing.address}</span>
                                </div>
                            </div>
                            <div style={{
                                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                                fontWeight: '700',
                                color: 'var(--primary)'
                            }}>
                                {listing.price}
                            </div>
                        </div>

                        <div className="scale-in stagger-1" style={{
                            display: 'flex',
                            gap: 'clamp(1rem, 3vw, 2rem)',
                            padding: 'clamp(1rem, 3vw, 1.5rem)',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius)',
                            border: '1px solid var(--border)',
                            marginBottom: '2rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <BedDouble size={20} color="var(--primary)" />
                                <span style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{listing.specs.bedrooms} Beds</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Bath size={20} color="var(--primary)" />
                                <span style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{listing.specs.bathrooms} Baths</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Square size={20} color="var(--primary)" />
                                <span style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{listing.specs.area}</span>
                            </div>
                        </div>

                        <h2 className="slide-up stagger-2" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '1rem' }}>Description</h2>
                        <p className="slide-up stagger-3" style={{
                            lineHeight: '1.6',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>
                            {listing.description}
                        </p>

                        <h2 className="slide-up stagger-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '1rem' }}>Amenities</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(150px, 100%), 1fr))',
                            gap: '1rem'
                        }}>
                            {listing.amenities && listing.amenities.map((amenity, index) => (
                                <div key={index} className="scale-in" style={{
                                    padding: '0.75rem',
                                    backgroundColor: 'white',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)',
                                    textAlign: 'center',
                                    fontSize: 'clamp(0.85rem, 2vw, 0.9rem)'
                                }}>
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="slide-in-right">
                    <div style={{ position: 'sticky', top: '6rem' }}>
                        <ContactForm listingTitle={listing.title} />

                        <div className="card scale-in stagger-1" style={{ padding: 'clamp(1.25rem, 3vw, 1.5rem)', marginTop: '1.5rem' }}>
                            <h3 style={{
                                marginBottom: '0.5rem',
                                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)'
                            }}>
                                Builder Details
                            </h3>
                            <p style={{ fontWeight: '600', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>{listing.builderName}</p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                                marginTop: '0.5rem',
                                lineHeight: '1.5'
                            }}>
                                Premium real estate developer with 20+ years of experience in luxury homes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;
