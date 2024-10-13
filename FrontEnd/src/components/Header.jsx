import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Header({ handleLogout }) {
  return (
    <header className="flex items-center justify-around bg-white p-4 shadow-lg">
            <div className="flex items-center">
                <img src="https://i0.wp.com/energysavingpros.com/wp-content/uploads/2017/09/footprint-e1505497060105.jpg?fit=900%2C471&ssl=1" alt="App Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2 font-mono cursor-default">Footprint Mayhem</h1>
                <div className='ml-8 flex items-center'>
                    {/* House icon */}
                    <Link className="mr-8 text-gray-800 hover:text-green-400 text-lg font-mono hover:scale-110 transform transition-transform duration-300" to='/dashboard'>
                        <FaHome size={24} /> {/* House icon, 24px size */}
                    </Link>
                    <Link 
                    className="text-gray-800 hover:text-green-400 text-lg font-mono hover:scale-110 transform transition-transform duration-300"
                    to="/about"
                    >
                    About
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className='mr-3'>{username || 'Loading...'}</p> {/* Show 'Loading...' if username is not set */}

                {/* Render the badge icon */}
                <div>{renderBadgeIcon()}</div>
            </div>
            <button onClick={handleLogout} className="ml-4 bg-red-600 text-white p-2 rounded">Logout</button>
        </header>
  );
}
