import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import { api } from '../utils/api';

const BuyerRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const data = await api.register({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                userType: 'buyer'
            });

            if (data.message === 'Registration successful') {
                alert(`Welcome ${formData.name}! Your buyer account has been created.`);
                navigate('/listings');
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (err) {
            console.error('Registration error:', err);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="container fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 1rem', maxWidth: '500px' }}>
            <div className="card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div className="scale-in">
                        <UserCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                    </div>
                    <h1 className="slide-up" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.5rem' }}>Register as Buyer</h1>
                    <p className="slide-up stagger-1" style={{ color: 'var(--text-secondary)' }}>Find your dream property</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="slide-up stagger-1">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="slide-up stagger-2">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div className="slide-up stagger-3">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>

                    <div className="slide-up stagger-4">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="slide-up stagger-4">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary scale-in stagger-4" style={{ width: '100%', marginTop: '1rem' }}>
                        Create Buyer Account
                    </button>
                </form>

                <div className="fade-in stagger-4" style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Login</Link>
                </div>

                <div className="fade-in stagger-4" style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    Are you a builder? <Link to="/register/builder" style={{ color: 'var(--primary)', fontWeight: '600' }}>Register as Builder</Link>
                </div>
            </div>
        </div>
    );
};

export default BuyerRegister;
