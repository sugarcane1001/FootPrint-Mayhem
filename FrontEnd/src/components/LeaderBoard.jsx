import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';

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
            setLeaderboard(data.slice(0, 3));
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
                </div>
            </div>
        </main>
    );
}
