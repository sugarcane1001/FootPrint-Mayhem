import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';

const Streak = () => {
    const [streakScore, setStreakScore] = useState(0);

    useEffect(() => {
        fetchStreakScore();
    }, []);

    const fetchStreakScore = async () => {
        try {
            const response = await axios.get('http://localhost:3000/leaderboard');
            const data = response.data.leaderboard;
            const currentUser = data.find(user => user.id === auth.currentUser.uid);
            const streakScore = currentUser.streaks;

            setStreakScore(streakScore);
        } catch (error) {
            console.error('Error fetching streak score:', error);
        }
    };

    return (
        <div className="mt-5 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-center">Streak</h2>
            <div className="flex items-center w-full justify-center">
            <img
                    src="https://tinyurl.com/ycx9yww4"  // Use the provided image link
                    alt="Streak Icon"
                    className="w-16 h-16"
                />
                <span className="text-4xl font-bold ml-4">{streakScore}</span>
            </div>
        </div>
    );
};

export default Streak;
