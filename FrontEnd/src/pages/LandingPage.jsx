
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export function LandingPage() {
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/auth');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Welcome to Climate Action Tracker!</h1>
                <p className="mt-4 text-lg">Join us in reducing your carbon footprint.</p>
                <button
                    onClick={handleGetStarted}
                    className="mt-6 p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}
