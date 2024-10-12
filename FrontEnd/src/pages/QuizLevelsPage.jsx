// QuizLevelsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LevelQuiz } from '../components/LevelQuiz';

export function QuizLevelsPage() {
    const navigate = useNavigate();

    const handleQuizComplete = (levelId, score) => {
        console.log(`Completed level ${levelId} with score ${score}`);
        // Update user's progress, unlock next level, etc.
    };

    return (
        <div className="p-8">
            <LevelQuiz onComplete={handleQuizComplete} />
        </div>
    );
}