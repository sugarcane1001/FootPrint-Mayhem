import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ handleLogout }) => {
    return (
        <header className="flex items-center justify-around bg-white p-4 shadow-lg">
            <div className="flex items-center">
                <img src="https://i0.wp.com/energysavingpros.com/wp-content/uploads/2017/09/footprint-e1505497060105.jpg?fit=900%2C471&ssl=1" alt="App Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2 font-mono cursor-default">Footprint Mayhem</h1>
            </div>
            <div className='flex items-center justify-between'>
                <Link 
                    className="mr-8 text-gray-800 hover:text-green-400 text-lg font-mono hover:scale-110 transform transition-transform duration-300"
                    to='/'>
                    <FaHome size={24} /> {/* House icon, 24px size */}
                </Link>
                <a 
                    className="text-gray-800 hover:text-green-400 text-lg font-mono hover:scale-110 transform transition-transform duration-300"
                    href=''>
                    About
                </a>
            </div>
        </header>
    );
};

export default Header;
