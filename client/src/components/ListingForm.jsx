import React, { useState } from 'react';

const ListingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        address: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        description: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            title: '',
            price: '',
            address: '',
            bedrooms: '',
            bathrooms: '',
            area: '',
            description: '',
            image: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="card fade-in" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>Add New Listing</h3>

            <div className="grid-responsive" style={{ marginBottom: '1.5rem', gap: '1.5rem' }}>
                <div className="slide-up stagger-1">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Property Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Luxury Villa in Whitefield"
                        required
                    />
                </div>
                <div className="slide-up stagger-2">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="e.g. 1.5 Cr"
                        required
                    />
                </div>
            </div>

            <div className="slide-up stagger-3" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full property address"
                    required
                />
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
            }}>
                <div className="slide-up stagger-1">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Bedrooms</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="slide-up stagger-2">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Bathrooms</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="slide-up stagger-3">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Area (sq.ft)</label>
                    <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g. 1500"
                        required
                    />
                </div>
            </div>

            <div className="slide-up stagger-4" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Image URL</label>
                <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div className="slide-up stagger-4" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe the property..."
                    required
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary scale-in" style={{ width: '100%' }}>Post Listing</button>
        </form>
    );
};

export default ListingForm;
