import React, { useEffect, useState } from 'react';
import { FaBicycle, FaLeaf, FaCarrot, FaTrophy } from 'react-icons/fa';
import { db, auth } from '../firebase'; // Import Firebase configuration
import Badge from './Badge'; // Component for displaying individual badges

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

const Badges = () => {
    const [userBadges, setUserBadges] = useState([]);

    useEffect(() => {
        const fetchUserBadges = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userRef = db.collection('users').doc(user.uid);
                    const doc = await userRef.get();
                    if (doc.exists) {
                        const badgeLevel = doc.data().badges; // Get the badge level (gold, silver, bronze, none)
                        
                        if (badgeLevel !== 'none') {
                            // Filter badgesData based on the badge level
                            const userBadges = badgesData.filter(badge => badge.level.toLowerCase() === badgeLevel);
                            setUserBadges(userBadges); // Set the filtered badges
                        } else {
                            setUserBadges([]); // No badges if 'none'
                        }
                    } else {
                        console.error('No such document!');
                    }
                }
            } catch (error) {
                console.error('Error fetching badges:', error);
            }
        };

        fetchUserBadges();
    }, []); // Empty array means it will only run once when component mounts

    return (
        <div className="badges-container flex flex-wrap justify-center">
            {userBadges.map((badge, index) => (
                <Badge 
                    key={index}
                    icon={badge.icon}
                    title={badge.title}
                    description={badge.description}
                    level={badge.level}
                />
            ))}
        </div>
    );
};

export default Badges;
