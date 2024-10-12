
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import { FeatureCard } from '../components/FeatureCard.jsx'
import Footer from '../components/Footer.jsx'


export function LandingPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/auth');
    };

    const styles = {
        container: `min-h-screen flex flex-col`,
        hero: `text-center py-20 bg-green-50`, // Centered text, added some padding and a light background
        heroContent: `max-w-4xl mx-auto px-4`, // Constrain width and center content
        mainTitle: `text-7xl font-bold mb-6 text-green-600`,
        subtitle: `text-xl mb-8 text-gray-600`,
        heroImage: `w-1/2 max-w-md`,
        button: `bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600`,
        featureList: `flex-grow bg-gray-100 py-16`,
        featureListInner: `max-w-6xl mx-auto px-4 space-y-24`,
        footer: `bg-green-500 text-white py-24 rounded-t-[100px]`, // Large, curved footer
        footerContent: `max-w-6xl mx-auto px-4 text-center`,
        footerTitle: `text-4xl font-bold mb-8`,// Increased space between items
        card: `flex items-center justify-between max-w-6xl mx-auto`,
        cardImage: `w-1/2 max-w-md rounded-3xl`, // Increased image size
        cardContent: `w-1/2 max-w-md px-8`,
        cardTitle: `text-3xl font-bold mb-4 text-red-500`, // Changed title style to red
        cardDescription: `text-lg text-gray-600`,
    };

    const features = [
        {
            title: "Daily Challenges",
            description: 'Daily Challenges offers users personalized eco-friendly tasks to complete each day, helping them reduce their carbon footprint while earning rewards. Challenges are designed around various environmental aspects such as energy consumption, transportation, and waste reduction.',
            image: "https://tinyurl.com/msjc7duc"
        },
        {
            title: "Quizzes",
            description: 'Quizzes allows users to test and expand their knowledge about carbon footprints, sustainability, and eco-friendly practices. Through a series of interactive quizzes, users are presented with questions on topics such as renewable resources, waste management, energy consumption, and how individual actions affect the planet.',
            image: "https://tinyurl.com/2sknfsdd"
        },
        {
            title: "Streaks",
            description: 'Streaks encourages users to maintain consistent daily activity by tracking their carbon footprint each day. For every consecutive day that a user logs their footprint or completes eco-friendly actions, they build a streak. As the streak grows, the points the user can earn are increased, providing extra motivation to stay engaged with their environmental goals.',
            image: "https://tinyurl.com/ycx9yww4"
        },
        {
            title: "Badges",
            description: 'Badges allow users to earn recognition for their achievements based on accumulated points, streaks, or completed challenges. As users engage with the app and work toward reducing their carbon footprint, they unlock badges that showcase their progress and dedication. These badges are displayed on the user\'s profile, providing a sense of accomplishment and pride.',
            image: "https://tinyurl.com/mr2c4v62"
        },
        {
            title: "Leaderboard",
            description: 'The leaderboard lets you compete with others by tracking your carbon footprint progress. Only the Top 100 users in each category have their points, streaks, and badges displayed, making it an exclusive showcase for the most dedicated participants. This feature adds a competitive element, motivating users to reach the top and be recognized for their commitment to reducing their carbon footprint.',
            image: "https://tinyurl.com/4eeecb3b"
        },
    ];

    // Modify the FeatureCard component to accept an 'index' prop
    function FeatureCard({ title, description, image, index }) {
        const isEven = index % 2 === 0;
        return (
            <div className={`${styles.card} ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
                <img src={image} alt={title} className={styles.cardImage} />
            </div>
        );
    }

    return (
        <>
            <Header></Header>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.mainTitle}>Your carbon footprint</h1>
                    <p className={styles.subtitle}>The free, fun, and effective way to reduce your environmental impact!</p>
                    <button className={styles.button}  onClick={handleGetStarted}>GET STARTED</button>
                </div>
            </section>
            <section className={styles.featureList}>
                <div className={styles.featureListInner}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                        />
                    ))}
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
