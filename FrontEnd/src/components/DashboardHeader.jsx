import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa'; // Correct import from Font Awesome
import { auth, db } from '../firebase'; // Ensure paths to firebase are correct
import { Link } from 'react-router-dom';

const DashboardHeader = ({ handleLogout }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            const user = auth.currentUser;
            console.log("Current User: ", user);
            if (user) {
                try {
                    const userDoc = await db.collection('users').doc(user.uid).get();
                    if (userDoc.exists) {
                        setUsername(userDoc.data().username);
                    }
                } catch (error) {
                    console.error('Error fetching username:', error);
                }
            }
        };

        fetchUsername();
    }, []);

    return (
        <header className="flex items-center justify-around bg-white p-4 shadow-lg">
            <div className="flex items-center">
                <img src="https://i0.wp.com/energysavingpros.com/wp-content/uploads/2017/09/footprint-e1505497060105.jpg?fit=900%2C471&ssl=1" alt="App Logo" className="h-10" />
                <h1 className="text-2xl font-bold ml-2 font-mono cursor-default">Footprint Mayhem</h1>
                <div className='ml-8 flex items-center'>
                    {/* House icon */}
                    <Link className="mr-8 text-gray-800 hover:text-green-400 transition delay-30 text-lg font-mono" to='/'>
                        <FaHome size={24} /> {/* House icon, 24px size */}
                    </Link>
                    <a className="text-gray-800 hover:text-green-400 transition delay-30 text-lg font-mono" href=''>About</a>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className='mr-3'>{username}</p>
                <p>Badge</p>
            </div>
            <button onClick={handleLogout} className="ml-4 bg-red-600 text-white p-2 rounded">Logout</button>
        </header>
    );
};

export default DashboardHeader;
