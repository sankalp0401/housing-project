import React, { useState } from 'react';
import { api } from '../utils/api';

const ContactForm = ({ listingTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.submitContact(formData);
            alert(`Thank you! Your interest in "${listingTitle}" has been sent to the builder.`);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.error('Error sending contact request:', err);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="card scale-in" style={{ padding: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
            <h3 style={{
                marginBottom: '1rem',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)'
            }}>
                Contact Builder
            </h3>
            <p style={{
                marginBottom: '1.5rem',
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.85rem, 2vw, 0.9rem)'
            }}>
                Interested in this property? Fill out the form below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="slide-up stagger-1">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="slide-up stagger-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="slide-up stagger-3">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="slide-up stagger-4">
                    <textarea
                        name="message"
                        placeholder="I am interested in this property..."
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary scale-in" style={{ width: '100%' }}>
                    Send Enquiry
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
