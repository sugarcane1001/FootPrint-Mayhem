import React, { useEffect, useState } from 'react';
import { FaTrophy, FaBicycle, FaLeaf, FaCarrot } from 'react-icons/fa';
import { db, auth } from '../firebase'; // Import Firebase configuration

const badgeIcons = {
    gold: <FaCarrot />,
    silver: <FaLeaf />,
    bronze: <FaBicycle />,
    default: <FaTrophy />,
};

const badgeDescriptions = {
    gold: "Plant-Based Hero: Reduced meat consumption for a month",
    silver: "Green Thumb: Used reusable bags for a week",
    bronze: "Eco Commuter: Biked to work for 5 days",
    default: "Default Badge: This is the default badge description.",
};

const Badges = () => {
    const [userBadge, setUserBadge] = useState(null);

    useEffect(() => {
        const fetchUserBadge = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userRef = db.collection('users').doc(user.uid);
                    const doc = await userRef.get();
                    if (doc.exists) {
                        const badgeLevel = doc.data().badges; // Get the badge level

                        if (badgeLevel && badgeLevel !== 'none') {
                            setUserBadge(badgeLevel); // Set the badge level
                        } else {
                            setUserBadge('default'); // Set default if no badge
                        }
                    } else {
                        console.error('No such document!');
                    }
                }
            } catch (error) {
                console.error('Error fetching badges:', error);
            }
        };

        fetchUserBadge();
    }, []); // Fetch badge once on mount

    return (
        <div className="badge-container flex justify-center">
            {userBadge && (
                <div className="badge">
                    {badgeIcons[userBadge] || badgeIcons['default']}
                    <p>{badgeDescriptions[userBadge] || badgeDescriptions['default']}</p>
                </div>
            )}
        </div>
    );
};

export default Badges;
