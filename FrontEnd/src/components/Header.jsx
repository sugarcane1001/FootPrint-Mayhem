import React from 'react';

const Header = ({ handleLogout }) => {
    return (
        <header className="flex items-center justify-around bg-white p-4 shadow-lg">
            <div className="flex items-center">
                <img src="https://i0.wp.com/energysavingpros.com/wp-content/uploads/2017/09/footprint-e1505497060105.jpg?fit=900%2C471&ssl=1" alt="App Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2 font-mono cursor-default">Footprint Mayhem</h1>
            </div>
            <div className='flex items-center justify-between'>
                <a className="mr-8 text-gray-800 hover:text-green-400 transition delay-30 text-lg font-mono" href=''>Home</a>
                <a className="text-gray-800 hover:text-green-400 transition delay-30 text-lg font-mono" href=''>About</a>
                
                <button
                    onClick={handleLogout}
                    className="w-full p-2 text-white bg-red-600 rounded-md hover:bg-red-500"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
