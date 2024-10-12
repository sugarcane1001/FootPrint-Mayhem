import React, { useEffect, useState } from 'react';
import { auth } from '../firebase'; // Adjust the path as needed
import { db } from '../firebase'; // Firestore import

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
