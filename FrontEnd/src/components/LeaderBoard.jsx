import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import Streak from './Streak';

export function LeaderBoard() {
    const [currentUserRank, setCurrentUserRank] = useState(null);
    const [currentUserPoints, setCurrenUserPoints] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const response = await axios.get('http://localhost:3000/leaderboard');
            const data = response.data.leaderboard;
            setCurrenUserPoints(data.find(user => user.id === auth.currentUser.uid).points);
            const currentUser = data.find(user => user.id === auth.currentUser.uid);
            setCurrentUserRank(data.indexOf(currentUser) + 1);

            setLeaderboard(data.slice(0, 20));
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    return (
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="flex justify-between items-start">
                    {/* Leaderboard Section */}
                    <div className="w-full bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
                        <table className="w-full">
                            <thead>
                                <tr className="bg-green-500">
                                    <th className="px-4 py-2 text-left">User</th>
                                    <th className="px-4 py-2 text-left">Rank</th>
                                    <th className="px-4 py-2 text-left">Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboard.map((user, index) => (
                                    <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                        <td className="px-4 py-2">{user.username}</td>
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">{user.points}</td>
                                    </tr>
                                ))}
                                {currentUserRank && (
                                    <tr className="bg-yellow-100">
                                        <td className="px-4 py-2 font-bold">You</td>
                                        <td className="px-4 py-2 font-bold">{currentUserRank}</td>
                                        <td className="px-4 py-2 font-bold">{currentUserPoints}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Streak Section */}
                    <div className="w-1/4 bg-white shadow rounded-lg p-6 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-4">Streak</h2>
                        <div className="flex items-center w-full">
                            {/* Fire Logo on the Left */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2a10 10 0 00-3.89 19.3c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.94 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1-.32 3.3 1.23a11.36 11.36 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.95.12 3.26.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.64-5.47 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A10 10 0 0012 2z"
                                />
                            </svg>
                            {/* Streak Value on the Right */}
                            <span className="text-4xl font-bold ml-auto">
                                <Streak />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
