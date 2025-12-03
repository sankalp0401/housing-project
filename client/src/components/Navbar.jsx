import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, UserPlus, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav style={{
                backgroundColor: 'var(--surface)',
                borderBottom: '1px solid var(--border)',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                padding: '1rem 0'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" onClick={closeMobileMenu} style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Home size={28} />
                        HousingPlus
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <Link to="/" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Home</Link>
                        <Link to="/listings" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Listings</Link>

                        <Link to="/register/buyer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <UserPlus size={18} />
                            Register as Buyer
                        </Link>

                        <Link to="/register/builder" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <Building2 size={18} />
                            Register as Builder
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div style={{ padding: '2rem 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>Menu</h3>
                        <button onClick={closeMobileMenu} style={{ background: 'none', border: 'none', padding: '0.5rem', cursor: 'pointer' }}>
                            <X size={24} />
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            style={{
                                padding: '1rem',
                                fontWeight: '500',
                                color: 'var(--text-main)',
                                borderRadius: 'var(--radius)',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/listings"
                            onClick={closeMobileMenu}
                            style={{
                                padding: '1rem',
                                fontWeight: '500',
                                color: 'var(--text-main)',
                                borderRadius: 'var(--radius)',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            Listings
                        </Link>

                        <div style={{ borderTop: '1px solid var(--border)', margin: '1rem 0' }} />

                        <Link
                            to="/register/buyer"
                            onClick={closeMobileMenu}
                            className="btn btn-outline"
                            style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}
                        >
                            <UserPlus size={18} />
                            Register as Buyer
                        </Link>

                        <Link
                            to="/register/builder"
                            onClick={closeMobileMenu}
                            className="btn btn-primary"
                            style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}
                        >
                            <Building2 size={18} />
                            Register as Builder
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
