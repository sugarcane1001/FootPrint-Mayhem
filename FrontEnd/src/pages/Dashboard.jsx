import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { LeaderBoard } from '../components/LeaderBoard';
import { handleFormSubmission } from '../firebaseUtils';
import { LevelQuiz } from '../components/LevelQuiz';  
import { UserInputForm } from '../components/UserInputForm';
import axios from 'axios';

export function Dashboard() {
    const navigate = useNavigate();



    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    };
    const handleQuizComplete = (levelId, score) => {
        console.log(`Completed level ${levelId} with score ${score}`);
        // Here you can add logic to update user's score or carbon footprint
        // For example, you might want to call an API to update the user's progress
    };

    return (
        <>
            <Header handleLogout={handleLogout} />
            <UserInputForm />
            <LeaderBoard />

            {/* Start Carbon Quiz button right under the LeaderBoard */}
            <div className="flex justify-center m-30">
                <Link 
                    to="/quiz-levels"
                    className="block w-full max-w-sm p-3 text-center text-white bg-green-600 rounded-md hover:bg-green-500"
                >
                    Start Carbon Quiz
                </Link>
            </div>

            {/* Dashboard Info Section */}
            <div className="flex items-end justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
                    <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
                    <p>
                        You are logged in as: <span className="font-semibold">{auth.currentUser?.email}</span>
                    </p>

                    <button
                        onClick={handleLogout}
                        className="w-full p-2 text-white bg-red-600 rounded-md hover:bg-red-500 mt-4"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
