import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; 

// we need to replace this with the API call
const getCarbonEmissionData = async () => {
    return 2.5; // Example value in kg CO2
};

// Update user stats (streaks, badges, carbonFootprint, points) after form submission
export const handleFormSubmission = async (userId) => {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        let { streaks, badges, carbonFootprint, points } = userDoc.data();

        streaks += 1;

        if (streaks >= 30) {
            badges = 'gold';
        } else if (streaks >= 20) {
            badges = 'silver';
        } else if (streaks >= 10) {
            badges = 'bronze';
        } else {
            badges = 'none';
        }

        // supposed to get carbon emission data from API
        const carbonEmission = await getCarbonEmissionData();

        // Update carbon footprint and points
        carbonFootprint += carbonEmission;
        points += 10; // demo for testing

        // Update Firestore
        await updateDoc(userDocRef, {
            streaks,
            badges,
            carbonFootprint,
            points
        });

        console.log('User stats updated:', { streaks, badges, carbonFootprint, points });
    } else {
        console.log("No such user document!");
    }
};

export const resetStreakIfMissed = async (userId) => {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        const { lastSubmissionDate } = userDoc.data();
        const today = new Date();
        const lastDate = new Date(lastSubmissionDate);

        if ((today - lastDate) > (24 * 60 * 60 * 1000)) {
            await updateDoc(userDocRef, { streaks: 0 });
        }
    }
};
