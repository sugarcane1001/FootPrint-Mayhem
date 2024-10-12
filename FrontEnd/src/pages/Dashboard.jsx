import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; 

export function Dashboard() {
    const navigate = useNavigate(); 

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/'); 
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
                <p>You are logged in as: <span className="font-semibold">{auth.currentUser?.email}</span></p>
                <button
                    onClick={handleLogout}
                    className="w-full p-2 text-white bg-red-600 rounded-md hover:bg-red-500"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
