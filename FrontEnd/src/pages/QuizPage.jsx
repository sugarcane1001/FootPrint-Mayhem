// QuizPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const quizQuestions = {
    1: [
        {
            question: "Which of these is a renewable energy source?",
            options: ["Coal", "Solar power", "Natural gas", "Oil"],
            correctAnswer: 1
        },
        {
            question: "What does the term 'carbon footprint' refer to?",
            options: ["Shoe size", "Amount of carbon dioxide released by your activities", "A type of fossil fuel", "A measurement of forest density"],
            correctAnswer: 1
        },
        {
            question: "Which of these actions can help reduce your carbon footprint?",
            options: ["Leaving lights on", "Using plastic bags", "Recycling", "Driving more"],
            correctAnswer: 2
        },
        {
            question: "What is the greenhouse effect?",
            options: ["Growing plants in a greenhouse", "Trapping of heat in Earth's atmosphere", "A type of house paint", "An effect caused by green-colored gases"],
            correctAnswer: 1
        },
        
    ],
    2: [
        {
            question: "What is the main cause of global warming?",
            options: ["Deforestation", "Greenhouse gases", "Ocean currents", "Solar flares"],
            correctAnswer: 1
        },
        {
            question: "Which of these is NOT a greenhouse gas?",
            options: ["Carbon dioxide", "Methane", "Oxygen", "Water vapor"],
            correctAnswer: 2
        },
        {
            question: "Which activity typically has the largest carbon footprint?",
            options: ["Taking a shower", "Using a computer", "Driving a car", "Watching TV"],
            correctAnswer: 2
        },
        {
            question: "What does 'carbon neutral' mean?",
            options: ["Producing no carbon", "Removing all carbon from the air", "Balancing carbon emissions with carbon removal", "Using only carbon-based fuels"],
            correctAnswer: 2
        },
        {
            question: "Which of these foods typically has the highest carbon footprint?",
            options: ["Beef", "Chicken", "Lentils", "Apples"],
            correctAnswer: 0
        },
        {
            question: "What is the most effective way to reduce your carbon footprint from transportation?",
            options: ["Drive a hybrid car", "Use public transportation", "Fly less frequently", "Carpool with colleagues"],
            correctAnswer: 2
        },
        {
            question: "Which household appliance typically uses the most energy?",
            options: ["Refrigerator", "Television", "Dishwasher", "Light bulbs"],
            correctAnswer: 0
        }
    ],
    3: [
        {
            question: "Which of these has the highest carbon footprint?",
            options: ["Taking a bus", "Driving a car", "Flying in a plane", "Riding a bicycle"],
            correctAnswer: 2
        },
        {
            "question": "Which type of food typically has the highest carbon footprint per kilogram?",
            "options": ["Beef", "Chicken", "Rice", "Vegetables"],
            "correctAnswer": 0
        },
        {
            "question": "Which action would save the most CO2 annually for the average household?",
            "options": [
                "Unplugging electronic devices when not in use", 
                "Switching to energy-efficient light bulbs", 
                "Installing solar panels", 
                "Using public transport instead of driving a car"
            ],
            "correctAnswer": 2
        },
        {
            "question": "How does buying second-hand clothes reduce your carbon footprint?",
            "options": ["It increases demand for raw materials", 
                "It extends the lifecycle of products", 
                "It improves transportation emissions", 
                "It eliminates the need for washing"
            ],
            "correctAnswer": 1
        }     // Add more questions for this level
    ],
    4:[
        {
            "question": "Which international agreement aims to limit global warming to well below 2°C above pre-industrial levels?",
            "options": ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Glasgow Pact"],
            "correctAnswer": 1
        },
        {
            "question": "What is the 'carbon budget' for limiting global warming to 1.5°C?",
            "options": ["500 gigatons", "800 gigatons", "1,200 gigatons", "2,000 gigatons"],
            "correctAnswer": 1
        },
        {
            "question": "Which country is currently the largest emitter of carbon dioxide?",
            "options": ["United States", "China", "India", "Russia"],
            "correctAnswer": 1
        },
        {
            "question": "What is the main goal of carbon pricing mechanisms like 'cap-and-trade' and 'carbon tax'?",
            "options": ["Subsidize green technologies", "Limit fossil fuel extraction", "Internalize the cost of emissions", "Fund renewable energy projects"],
            "correctAnswer": 2
        }

    ],
    5: [
        {
            "question": "Which industrial sector contributes the most to global carbon emissions?",
            "options": ["Transportation", "Agriculture", "Energy production", "Construction"],
            "correctAnswer": 2
        },
        {
            "question": "What is the global warming potential (GWP) of methane compared to carbon dioxide over 20 years?",
            "options": ["10 times", "25 times", "50 times", "100 times"],
            "correctAnswer": 1
        }, 
        {
            "question": "Which practice is most effective for capturing carbon from the atmosphere?",
            "options": ["Direct air capture", "Planting forests", "Soil carbon sequestration", "Biochar production"],
            "correctAnswer": 0
        },
        {
            "question": "Which of the following has the largest water and carbon footprint combined?",
            "options": ["Almond milk", "Beef burger", "Chicken breast", "Rice bowl"],
            "correctAnswer": 1
        }

    ],
    6: [
        {
            "question": "What is the key challenge in achieving negative emissions through direct air capture (DAC) technologies?",
            "options": ["High operational costs", "Lack of regulatory frameworks", "Insufficient land availability", "Limited carbon storage capacity"],
            "correctAnswer": 0
        },
        {
            "question": "Which concept explains how reducing Arctic ice impacts global weather patterns?",
            "options": ["Albedo effect", "Thermohaline circulation", "Jet stream destabilization", "Carbon sink degradation"],
            "correctAnswer": 2
        },
        {
            "question": "What is the main limitation of relying on carbon offsets to meet corporate net-zero goals?",
            "options": ["Lack of transparency in reporting", "Offsets do not reduce emissions at the source", "Short lifespan of carbon sequestration projects", "High demand leading to offset inflation"],
            "correctAnswer": 1
        },
        {
            "question": "Which feedback loop is considered the most dangerous in accelerating climate change?",
            "options": ["Permafrost thawing", "Ocean acidification", "Ice-albedo feedback", "Methane clathrate release"],
            "correctAnswer": 0
        }

    ]
};


export function QuizPage() {
    const { levelId } = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    console.log('Level ID:', levelId); // Debugging output
    const questions = quizQuestions[levelId] || [];

    if (questions.length === 0) {
        return <div>No questions available for this level.</div>;
    }

    const currentQuiz = questions[currentQuestion];

    // Add handleAnswerClick function
    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);
        if (index === currentQuiz.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        // Move to the next question after a brief delay
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion((prev) => prev + 1);
                setSelectedAnswer(null); // Reset selected answer
            } else {
                // Quiz completed, navigate back to the dashboard
                alert(`Quiz completed! Your score: ${score + 1}/${questions.length}`);
                navigate('/dashboard'); // Adjust route as per your routing setup
            }
        }, 1000); // Delay to show feedback to the user
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Level {levelId} Quiz</h2>
            <h3 className="text-xl font-medium mb-4">{currentQuiz.question}</h3>
            <div className="space-y-4">
                {currentQuiz.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        className={`w-full p-3 text-left rounded-lg transition-colors ${
                            selectedAnswer === index
                                ? index === currentQuiz.correctAnswer
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}