// BadgesData.js
import { FaBicycle, FaLeaf, FaCarrot, FaTrophy } from 'react-icons/fa';

const badgesData = [
    {
        icon: <FaTrophy />,
        title: "Default Badge",
        description: "This is the default badge description.",
        level: "Bronze"
    },
    {
        icon: <FaBicycle />,
        title: "Eco Commuter",
        description: "Biked to work for 5 days",
        level: "Bronze"
    },
    {
        icon: <FaLeaf />,
        title: "Green Thumb",
        description: "Used reusable bags for a week",
        level: "Silver"
    },
    {
        icon: <FaCarrot />,
        title: "Plant-Based Hero",
        description: "Reduced meat consumption for a month",
        level: "Gold"
    },
    // Add more badge objects here as needed
];

export default badgesData;
