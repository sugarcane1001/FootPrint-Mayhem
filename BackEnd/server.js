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
            leaderboard.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json({ leaderboard });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});

// Add a health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})