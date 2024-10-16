import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function Header({ handleLogout }) {
    return (
        <header className="flex items-center justify-between bg-white p-4 shadow-lg px-6">
            <div className="flex items-center">
                <img 
                    src="https://i0.wp.com/energysavingpros.com/wp-content/uploads/2017/09/footprint-e1505497060105.jpg?fit=900%2C471&ssl=1" 
                    alt="Footprint Mayhem Logo" 
                    className="h-10"
                />
                <h1 className="hidden md:block text-2xl font-bold ml-2 font-mono cursor-default">Footprint Mayhem</h1>
            </div>
            <div className="ml-auto flex items-center space-x-8">
                <Link 
                    className="text-gray-800 hover:text-green-400 text-lg font-mono hover:scale-110 transform transition-transform duration-300" 
                    to="/dashboard"
                >
                    <FaHome size={24} />
                </Link>
                <Link 
                    className="text-gray-800 hover:text-green-400 text-lg font-mono hover:scale-110 transform transition-transform duration-300" 
                    to="/about"
                >
                    About
                </Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400 transition"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};