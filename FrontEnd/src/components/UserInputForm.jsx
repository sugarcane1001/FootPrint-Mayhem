import React, { useState } from 'react';
import { handleFormSubmission } from '../firebaseUtils';
import { auth } from '../firebase';


const OPTIONS = {
    transport: [
        { label: 'Car', value: 'car', emissions: 2.3 },
        { label: 'Bus', value: 'bus', emissions: 1.2 },
        { label: 'Bike', value: 'bike', emissions: 0 },
        { label: 'Walk', value: 'walk', emissions: 0 }
    ],
    diet: [
        { label: 'Meat-heavy', value: 'meat-heavy', emissions: 3.3 },
        { label: 'Average', value: 'average', emissions: 2.5 },
        { label: 'Vegetarian', value: 'vegetarian', emissions: 1.7 },
        { label: 'Vegan', value: 'vegan', emissions: 1.5 }
    ],
    energy: [
        { label: 'High', value: 'high', emissions: 4.0 },
        { label: 'Average', value: 'average', emissions: 3.0 },
        { label: 'Low', value: 'low', emissions: 2.0 }
    ]
};

export function UserInputForm() {
    const [inputs, setInputs] = useState({ transport: 'car', diet: 'average', energy: 'average' });
    const [totalEmissions, setTotalEmissions] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const total = Object.keys(inputs).reduce(
            (sum, key) => sum + OPTIONS[key].find(opt => opt.value === inputs[key]).emissions,
            0
        );
        setTotalEmissions(total.toFixed(2));
        setSubmitted(true);
            const userId = auth.currentUser?.uid;
            if (userId) {
                // calling the function that updates db
                await handleFormSubmission(userId);
            }

    };

    // Render select inputs
    const renderSelect = (label, name) => (
        <div>
            <h2 className="text-lg font-semibold">{label}</h2>
            <select name={name} value={inputs[name]} onChange={handleInputChange} className="w-full p-2 border rounded">
                {OPTIONS[name].map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="mt-5 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-center text-green-600">Carbon Footprint Calculator</h1>
            
            {renderSelect('Transport', 'transport')}
            {renderSelect('Diet', 'diet')}
            {renderSelect('Energy Usage', 'energy')}

            <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-white p-3 rounded mt-4 font-bold hover:bg-green-600 transition"
            >
                Submit
            </button>

            {submitted && (
                <div className="bg-green-100 p-4 rounded mt-4">
                    <h2 className="text-lg font-semibold text-green-800">Calculation Complete</h2>
                    <p className="text-2xl font-bold text-green-600">{totalEmissions} kg CO2e/day</p>
                </div>
            )}
        </div>
    );
}
