import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    return (
        <div className="card">
            <div style={{ height: '200px', backgroundColor: '#e0e0e0', position: 'relative' }}>
                <img
                    src={listing.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'}
                    alt={listing.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)'
                }}>
                    ₹ {listing.price}
                </div>
            </div>

            <div style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
                <h3 style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                    marginBottom: '0.5rem',
                    fontWeight: '700',
                    lineHeight: '1.3'
                }}>
                    {listing.title}
                </h3>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem'
                }}>
                    <MapPin size={16} />
                    <span style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)' }}>{listing.address}</span>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                }}>
                    <span style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', color: 'var(--text-secondary)' }}>
                        By <strong>{listing.builderName}</strong>
                    </span>
                    <Link
                        to={`/listings/${listing.id}`}
                        className="btn btn-outline"
                        style={{
                            padding: '0.5rem 1rem',
                            fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
