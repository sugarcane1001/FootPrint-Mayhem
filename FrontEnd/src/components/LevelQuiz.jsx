// LevelQuiz.jsx
import React, { useState } from 'react';
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
    const [currentLevel, setCurrentLevel] = useState(0);
    const [levelPoints, setLevelPoints] = useState({});

    const handleLevelClick = (level) => {
        if (level.id === currentLevel + 1 || level.id === 1) {
            setCurrentLevel(level.id);
            if (quizQuestions[level.id]) {
                // Navigate to the quiz page for this level
                navigate(`/quiz/${level.id}`);
            } else {
                // Handle levels without questions (if any)
                onComplete(level.id);
            }
        }
    };

    return (
        <div className="bg-white rounded-lg p-6 overflow-y-auto h-95 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Daily Carbon Quiz Levels</h2>
            <div className="space-y-6">
                {levels.map((level) => (
                    <div
                        key={level.id}
                        className={`flex items-center justify-between space-x-6 p-4 rounded-lg cursor-pointer
                                   ${level.id <= currentLevel ? 'bg-green-100' : 'bg-gray-100'}
                                   ${level.id === currentLevel + 1 ? 'animate-pulse' : ''}
                                   hover:bg-gray-200 transition-all duration-300`}
                        onClick={() => handleLevelClick(level)}
                    >
                        <div className="flex items-center space-x-6">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl
                                ${level.id <= currentLevel ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                {level.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold">{level.title}</h3>
                                <p className="text-sm text-gray-600">Level {level.id}</p>
                            </div>
                        </div>
                        {levelPoints[level.id] !== undefined && (
                            <div className="text-green-600 font-bold animate-bounce">
                                +{levelPoints[level.id]} points
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}