import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
    const navigate = useNavigate();

    // Toggle between login and signup
    const toggleLogin = () => setIsLogin(!isLogin);

    // form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Sign in existing user
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/dashboard'); // Redirect to dashboard on successful login
            } else {
                // Create a new user
                await createUserWithEmailAndPassword(auth, email, password);
                navigate('/dashboard'); // Redirect to dashboard on successful signup
            }
        } catch (error) {
            console.error("Authentication error:", error.message);
            alert(error.message); // if error 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <button
                    onClick={toggleLogin}
                    className="w-full text-blue-600 hover:underline"
                >
                    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </button>
            </div>
        </div>
    );
}
