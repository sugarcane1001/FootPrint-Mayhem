import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../pages/QuizPage';
import { useNavigate } from 'react-router-dom';

const levels = [
    { id: 1, type: 'start', title: 'START', icon: '▶️' },
    { id: 2, type: 'quiz', title: 'Basic', icon: '🌱' },
    { id: 3, type: 'quiz', title: 'Intermediate', icon: '🌿' },
    { id: 4, type: 'bonus', title: 'Bonus', icon: '🎁' },
    { id: 5, type: 'quiz', title: 'Advanced', icon: '🌳' },
    { id: 6, type: 'final', title: 'Master', icon: '🏆' },
];

export function LevelQuiz({ onComplete }) {
    const navigate = useNavigate();
    const [highestUnlockedLevel, setHighestUnlockedLevel] = useState(1);
    const [levelPoints, setLevelPoints] = useState({});

    useEffect(() => {
        const savedLevel = localStorage.getItem('highestUnlockedLevel');
        if (savedLevel) {
            setHighestUnlockedLevel(parseInt(savedLevel, 10));
        }

        const scores = {};
        levels.forEach(level => {
            const score = localStorage.getItem(`level${level.id}Score`);
            if (score) {
                scores[level.id] = parseInt(score, 10);
            }
        });
        setLevelPoints(scores);
    }, []);

    const handleLevelClick = (level) => {
        if (level.id <= highestUnlockedLevel) {
            if (quizQuestions[level.id]) {
                navigate(`/quiz/${level.id}`);
            } else {
                onComplete(level.id);
            }
        }
    };

    const getPointsDisplay = (points) => {
        if (points >= 3) return '+3';
        if (points >= 2) return '+2';
        return '+1';
    };

    return (
        <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-lg p-6 overflow-y-auto h-95 shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Daily Carbon Quiz Levels</h2>
            <div className="space-y-6">
                {levels.map((level) => (
                    <div
                        key={level.id}
                        className={`flex items-center justify-between space-x-6 p-4 rounded-lg relative
                                   ${level.id <= highestUnlockedLevel ? 'cursor-pointer bg-green-100 hover:bg-green-200' : 'bg-gray-100 opacity-50'}
                                   transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg shadow-md`}
                        onClick={() => handleLevelClick(level)}
                    >
                        <div className="flex items-center space-x-6">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl
                                ${level.id <= highestUnlockedLevel ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-600'}`}>
                                {level.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold">{level.title}</h3>
                                <p className="text-sm text-gray-600">Level {level.id}</p>
                            </div>
                        </div>
                        {levelPoints[level.id] !== undefined && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                {getPointsDisplay(levelPoints[level.id])}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
