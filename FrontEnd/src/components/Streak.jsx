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
            const response = await axios.get('YOUR_BACKEND_API_URL/streak-score', {
                headers: {
                    'Authorization': `Bearer ${await auth.currentUser.getIdToken()}`,
                },
            });
            setStreakScore(response.data.streakScore);
        } catch (error) {
            console.error('Error fetching streak score:', error);
        }
    };

    return (
        <div className="mt-5 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-center">Streak</h2>
            <div className="flex items-center w-full justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2a10 10 0 00-3.89 19.3c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.94 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1-.32 3.3 1.23a11.36 11.36 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.95.12 3.26.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.64-5.47 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A10 10 0 0012 2z"
                    />
                </svg>
                <span className="text-4xl font-bold ml-4">{streakScore}</span>
            </div>
        </div>
    );
};

export default Streak;
