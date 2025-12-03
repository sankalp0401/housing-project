import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Shield, Award, TrendingUp, Users, CheckCircle, Lock, Zap, BadgeCheck } from 'lucide-react';
import ListingCard from '../components/ListingCard';

const Home = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('buy');

    // Mock data for featured listings
    const featuredListings = [
        {
            id: 1,
            title: 'Luxury Apartment in Indiranagar',
            price: '₹1.2 Cr - ₹1.5 Cr',
            address: 'Indiranagar, Bangalore',
            builderName: 'Prestige Group',
            image: 'https://images.unsplash.com/photo-1600596542815-27bfef40d396?auto=format&fit=crop&w=800&q=80',
            isVerified: true
        },
        {
            id: 2,
            title: 'Spacious Villa in Whitefield',
            price: '₹2.8 Cr - ₹3.5 Cr',
            address: 'Whitefield, Bangalore',
            builderName: 'Sobha Developers',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            isVerified: true
        },
        {
            id: 3,
            title: 'Modern Flat in Koramangala',
            price: '₹85 L - ₹98 L',
            address: 'Koramangala, Bangalore',
            builderName: 'Brigade Group',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            isVerified: true
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/listings?search=${encodeURIComponent(searchQuery)}`);
        } else {
            navigate('/listings');
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="fade-in" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '3rem 0 4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="slide-up" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            marginBottom: '1.5rem',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <BadgeCheck size={18} />
                            <span style={{ textAlign: 'center' }}>India's First Verified-Price Booking Platform</span>
                        </div>

                        <h1 className="slide-up stagger-1" style={{
                            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                            marginBottom: '1rem',
                            fontWeight: '800',
                            lineHeight: '1.2'
                        }}>
                            Buy Homes with <span style={{ color: '#ffd700' }}>Real Prices</span>,<br />
                            Zero Brokerage, Full Transparency
                        </h1>

                        <p className="slide-up stagger-2" style={{
                            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                            marginBottom: '2rem',
                            opacity: '0.95',
                            lineHeight: '1.6'
                        }}>
                            Pay just ₹199 to unlock verified prices and real availability.<br />
                            No fake listings. No broker pressure. Only serious buyers and builders.
                        </p>

                        {/* Trust Indicators */}
                        <div className="slide-up stagger-3" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 'clamp(1rem, 3vw, 2rem)',
                            marginBottom: '2.5rem',
                            flexWrap: 'wrap'
                        }}>
                            {[
                                { icon: <Shield size={20} />, text: 'Verified Prices' },
                                { icon: <CheckCircle size={20} />, text: 'Zero Brokerage' },
                                { icon: <Lock size={20} />, text: 'Secure Booking' }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                                    fontWeight: '600'
                                }}>
                                    {item.icon}
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="scale-in stagger-4" style={{
                            backgroundColor: 'white',
                            padding: '0.5rem',
                            borderRadius: '12px',
                            maxWidth: '700px',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '0.5rem',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                flex: '1 1 200px',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 1rem',
                                gap: '0.5rem',
                                minWidth: '200px'
                            }}>
                                <Search color="#666" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search verified properties..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        border: 'none',
                                        boxShadow: 'none',
                                        width: '100%',
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        color: '#333',
                                        padding: '0.5rem 0'
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{
                                padding: '1rem 2rem',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                fontWeight: '600',
                                borderRadius: '8px',
                                flex: '0 1 auto'
                            }}>
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div style={{ padding: 'clamp(2rem, 5vw, 4rem) 0', backgroundColor: 'white' }}>
                <div className="container">
                    <h2 className="slide-up" style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                        fontWeight: '700',
                        textAlign: 'center',
                        marginBottom: '1rem'
                    }}>
                        How It Works
                    </h2>
                    <p className="slide-up stagger-1" style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                        marginBottom: '3rem'
                    }}>
                        From browsing to booking in 3 simple steps
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                        gap: 'clamp(1.5rem, 3vw, 2rem)',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {[
                            {
                                step: '1',
                                icon: <Search size={40} color="var(--primary)" />,
                                title: 'Browse Verified Projects',
                                description: 'Explore quality listings from verified builders. See price ranges and basic details for free.'
                            },
                            {
                                step: '2',
                                icon: <Lock size={40} color="var(--primary)" />,
                                title: 'Pay ₹199 to Unlock',
                                description: 'Refundable deposit unlocks exact prices and real unit availability. Filters casual browsers.'
                            },
                            {
                                step: '3',
                                icon: <CheckCircle size={40} color="var(--primary)" />,
                                title: 'Book with Confidence',
                                description: 'Zero brokerage, transparent process, direct builder contact. Complete booking hassle-free.'
                            }
                        ].map((item, index) => (
                            <div key={index} className={`scale-in stagger-${index + 2}`} style={{
                                textAlign: 'center',
                                padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '12px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    fontWeight: '700'
                                }}>
                                    {item.step}
                                </div>
                                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Projects */}
            <div style={{ backgroundColor: '#f8f9fa', padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
                <div className="container" style={{ padding: '0 1rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="slide-up" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: '700', marginBottom: '0.5rem' }}>
                            Featured Verified Projects
                        </h2>
                        <p className="slide-up stagger-1" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                            Premium properties with verified prices and real availability
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
                        gap: 'clamp(1.5rem, 3vw, 2rem)'
                    }}>
                        {featuredListings.map((listing, idx) => (
                            <div key={listing.id} className={`scale-in stagger-${idx + 1}`} style={{ position: 'relative' }}>
                                {listing.isVerified && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        backgroundColor: '#10b981',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        zIndex: 10,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                    }}>
                                        <BadgeCheck size={16} />
                                        Verified
                                    </div>
                                )}
                                <ListingCard listing={listing} />
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/listings" className="btn btn-primary" style={{
                            padding: '1rem 3rem',
                            fontSize: '1.1rem'
                        }}>
                            View All Verified Properties
                        </Link>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) 1rem' }}>
                <h2 className="slide-up" style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    Why We're Different
                </h2>
                <p className="slide-up stagger-1" style={{
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                    marginBottom: '3rem'
                }}>
                    The bridge between browsing and booking
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
                    gap: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                    {[
                        {
                            icon: <BadgeCheck size={40} color="var(--primary)" />,
                            title: 'Verified Prices Only',
                            description: 'No fake pricing. Every price is verified and locked. What you see is what you pay.'
                        },
                        {
                            icon: <Users size={40} color="var(--primary)" />,
                            title: 'Serious Buyers Only',
                            description: '₹199 deposit filters casual browsers. Builders get quality leads, buyers get attention.'
                        },
                        {
                            icon: <Shield size={40} color="var(--primary)" />,
                            title: 'Zero Brokerage',
                            description: 'No hidden fees, no broker pressure. Direct connection between buyers and builders.'
                        },
                        {
                            icon: <Zap size={40} color="var(--primary)" />,
                            title: 'Transparent Process',
                            description: 'Clear booking steps, refundable deposits, structured timeline. Complete transparency.'
                        }
                    ].map((feature, index) => (
                        <div key={index} className={`scale-in stagger-${index + 2}`} style={{
                            textAlign: 'center',
                            padding: 'clamp(1.5rem, 3vw, 2rem) 1rem'
                        }}>
                            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* For Builders CTA */}
            <div className="fade-in" style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: 'clamp(2rem, 5vw, 4rem) 1rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 className="slide-up" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: '700', marginBottom: '1rem' }}>
                        Are You a Builder?
                    </h2>
                    <p className="slide-up stagger-1" style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '1rem', opacity: '0.95' }}>
                        List your properties at just ₹999 per flat
                    </p>
                    <p className="slide-up stagger-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', marginBottom: '2.5rem', opacity: '0.9' }}>
                        Get verified buyers only • Zero time wastage • 2% success fee on booking
                    </p>
                    <Link
                        to="/register/builder"
                        className="btn scale-in stagger-3"
                        style={{
                            backgroundColor: 'white',
                            color: 'var(--primary)',
                            padding: 'clamp(0.85rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem)',
                            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                            fontWeight: '600',
                            display: 'inline-block',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}
                    >
                        Start Listing Properties
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
