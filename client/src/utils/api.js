// Automatically use the same host as the frontend for API calls
// This allows the app to work on both localhost and network IP addresses
const API_URL = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:5000`;

export const api = {
    // Listings
    getListings: async () => {
        const response = await fetch(`${API_URL}/api/listings`);
        if (!response.ok) throw new Error('Failed to fetch listings');
        return response.json();
    },

    getListing: async (id) => {
        const response = await fetch(`${API_URL}/api/listings/${id}`);
        if (!response.ok) throw new Error('Failed to fetch listing');
        return response.json();
    },

    createListing: async (data) => {
        const response = await fetch(`${API_URL}/api/listings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to create listing');
        return response.json();
    },

    submitContact: async (data) => {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to submit contact');
        return response.json();
    },

    // Registration
    register: async (data) => {
        const response = await fetch(`${API_URL}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to register');
        return response.json();
    },
};
