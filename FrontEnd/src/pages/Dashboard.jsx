import React, { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { LeaderBoard } from '../components/LeaderBoard';
import { handleFormSubmission } from '../firebaseUtils';

export function Dashboard() {
    const [formData, setFormData] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    };

    // temp form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = auth.currentUser?.uid;
            if (userId) {
                // calling the function that updates db
                await handleFormSubmission(userId);
                setSubmissionMessage('Form submitted successfully! Your stats have been updated.');
            } else {
                setSubmissionMessage('Error: User not authenticated.');
            }
        } catch (error) {
            setSubmissionMessage(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <Header handleLogout={handleLogout} />
            <LeaderBoard />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
                    <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
                    <p>You are logged in as: <span className="font-semibold">{auth.currentUser?.email}</span></p>

                    {/* temp form to test */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            value={formData}
                            onChange={(e) => setFormData(e.target.value)}
                            placeholder="Enter some data"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
                        >
                            Submit Form
                        </button>
                    </form>

                    {submissionMessage && (
                        <p className="text-green-600 font-semibold mt-4">{submissionMessage}</p>
                    )}

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
