import { useEffect, useState } from 'react';
import { onSnapshot, doc } from 'firebase/firestore'; // Import Firestore real-time listener
import { db, auth } from '../firebase'; // Import Firebase config

const Streak = () => {
    const [streakScore, setStreakScore] = useState(0);

    useEffect(() => {
        const userId = auth.currentUser?.uid;
        if (!userId) return;

        // Create a reference to the user's document in Firestore
        const userDocRef = doc(db, 'users', userId);

        // Listen for real-time updates
        const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.data();
                setStreakScore(userData.streaks); // Update the state with the new streak value
            } else {
                console.log("No such user document!");
            }
        });

        // Clean up the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="mt-5 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-center">Streak</h2>
            <div className="flex items-center w-full justify-center">
                <img
                    src="https://tinyurl.com/ycx9yww4"
                    alt="Streak Icon"
                    className="w-16 h-16"
                />
                <span className="text-4xl font-bold ml-4">{streakScore}</span>
            </div>
        </div>
    );
};

export default Streak;
