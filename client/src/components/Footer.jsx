import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            padding: 'clamp(2rem, 4vw, 3rem) 1rem',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <h3 style={{
                    color: 'var(--text-main)',
                    marginBottom: '1rem',
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)'
                }}>
                    HousingPlus
                </h3>
                <p style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                    &copy; {new Date().getFullYear()} HousingPlus. All rights reserved.
                </p>
                <div style={{
                    marginTop: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'clamp(1rem, 3vw, 1.5rem)',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="#"
                        style={{
                            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                            transition: 'color 0.2s'
                        }}
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        style={{
                            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                            transition: 'color 0.2s'
                        }}
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        style={{
                            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                            transition: 'color 0.2s'
                        }}
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
