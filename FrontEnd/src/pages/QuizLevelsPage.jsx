// QuizLevelsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LevelQuiz } from '../components/LevelQuiz';
import DashboardHeader from '../components/DashboardHeader';

export function QuizLevelsPage() {
    const navigate = useNavigate();

    const handleQuizComplete = (levelId, score) => {
        console.log(`Completed level ${levelId} with score ${score}`);
        // Update user's progress, unlock next level, etc.
    };

    return (
        <div className="">
            <DashboardHeader></DashboardHeader>
            <LevelQuiz onComplete={handleQuizComplete} />
        </div>
    );
}