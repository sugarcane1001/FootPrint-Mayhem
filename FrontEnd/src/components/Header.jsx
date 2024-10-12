import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-around bg-white p-4 shadow-lg">
            <div className="flex items-center">
                <img src="" alt="App Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2">Footprint Mayhem</h1>
            </div>
            <div className="flex space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Get Started</button>
                <button className="bg-transparent text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-100 transition">I Already Have an Account</button>
            </div>
        </header>
    );
};

export default Header;
