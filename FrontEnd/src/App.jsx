
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage'; 
import { Dashboard } from './pages/Dashboard';
import { QuizPage } from './pages/QuizPage';
import { LevelQuiz } from './components/LevelQuiz';
import { QuizLevelsPage } from './pages/QuizLevelsPage';


import { About } from './pages/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/quiz/:levelId" element={<QuizPage />} />
                <Route path="/quiz-levels" element={<QuizLevelsPage />} />


                <Route path="/about" element={<About />} /> 
            </Routes>
        </Router>
    );
}

export default App;
