import { useNavigate } from 'react-router-dom';

export default function Footer() {
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
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/auth');
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <h2 className={styles.footerTitle}>Start reducing your carbon footprint today!</h2>
                <button className={styles.button}  onClick={handleGetStarted}>GET STARTED</button>
            </div>
        </footer>)
}