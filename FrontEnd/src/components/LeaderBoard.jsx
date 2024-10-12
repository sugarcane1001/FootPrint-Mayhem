import { useEffect, useState } from 'react';
export function LeaderBoard() {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch('/leaderboard');
                const data = await response.json();
                setLeaderboardData(data);
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };
        fetchLeaderboard();
    }, []);
    return (
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Leaderboard</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-green-500 text-white">
                        <tr>
                            <th className="py-2 px-4 border-b">Rank</th>
                            <th className="py-2 px-4 border-b">Username</th>
                            <th className="py-2 px-4 border-b">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((player, index) => (
                            <tr
                                key={player._id}
                                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                            >
                                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                                <td className="py-2 px-4 border-b text-center">{player.username}</td>
                                <td className="py-2 px-4 border-b text-center">{player.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}