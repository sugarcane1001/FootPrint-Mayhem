
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import { FeatureCard } from '../components/FeatureCard.jsx'
import {Footer} from '../components/Footer.jsx'


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
            title: "Feature 1",
            description: "This is a description of the first feature. It can be quite long and will wrap to the next line if needed.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Feature 2",
            description: "This is a description of the second feature. It's also long enough to demonstrate text wrapping.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Feature 3",
            description: "This is a description of the third feature. Add more text to see how it handles longer content.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Feature 4",
            description: "This is a description of the fourth feature. It continues the pattern of longer descriptions.",
            image: "https://via.placeholder.com/400"
        },
        {
            title: "Feature 5",
            description: "This is a description of the fifth feature. Keep adding features to ensure scrolling is necessary.",
            image: "https://via.placeholder.com/400"
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
