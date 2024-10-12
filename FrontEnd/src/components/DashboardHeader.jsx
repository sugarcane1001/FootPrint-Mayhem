import React from 'react';

const DashboardHeader = ({ handleLogout }) => {
    return (
        <header className="flex items-center justify-around bg-white p-4 shadow-lg">
            <div className="flex items-center">
                <img src="https://i0.wp.com/energysavingpros.com/wp-content/uploads/2017/09/footprint-e1505497060105.jpg?fit=900%2C471&ssl=1" alt="App Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2 font-mono cursor-default">Footprint Mayhem</h1>
            </div>
            <div className='flex items-center justify-between'>
                <p className='mr-3'>Username</p>
                <p>Badge</p>
            </div>
        </header>
    );
};

export default DashboardHeader;
