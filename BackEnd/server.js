const express = require('express')
const admin = require('firebase-admin');
const serviceAccount = require('./firebasePK.json');
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: "hackharvard-ec32c"
});

const db = admin.firestore();

app.get('/leaderboard', async (req, res) => {
    try {
        const usersSnapshot = await db.collection('users').orderBy('points', 'desc').limit(10).get();
        console.log('A', usersSnapshot)
        const leaderboard = [];
        usersSnapshot.forEach(doc => {
            leaderboard.push({ id: doc.id, username: doc.data().username, points: doc.data().points });
        });

        res.status(200).json({ leaderboard });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});

app.post('/userInfo', async (req, res) => {
    const userId = req.body.uid
    console.log('User ID:', userId);

    try {
        const userDoc = await db.collection('users').doc(userId).get();
        console.log(userDoc.data())

        if (!userDoc.exists) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json({ username: userDoc.data().username, badges: userDoc.data().badges, points: userDoc.data().points, streak: userDoc.data().streaks });
        }
    } catch (error) {
        console.error('Error fetching username:', error);
        res.status(500).json({ error: 'Failed to fetch username' });
    }
});
// Add a health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})