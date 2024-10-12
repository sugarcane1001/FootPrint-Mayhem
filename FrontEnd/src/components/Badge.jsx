import React from 'react';
import { FaBicycle, FaLeaf, FaCarrot } from 'react-icons/fa'; // Placeholders

const Badge = ({ icon, title, description, level }) => {
    return (
        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            {level && <p className="mt-1 text-xs text-gray-400">Level: {level}</p>}
        </div>
    );
};

export default Badge;
