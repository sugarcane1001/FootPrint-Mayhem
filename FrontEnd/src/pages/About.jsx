import React from 'react';
import { motion } from 'framer-motion'; 
import Header from '../components/Header';  // Correct way
import DashboardHeader from '../components/DashboardHeader';


export function About() {
    const pageVariants = {
        hidden: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    return (
        <>
            <DashboardHeader />
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="min-h-screen bg-green-50 text-gray-800 flex flex-col items-center py-20"
            >
                <h1 className="text-4xl font-bold text-center text-green-600 mb-10">About Us</h1>

                <section className="max-w-3xl text-center mb-10">
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p>
                        We aim to empower individuals to take action in reducing their carbon footprint by making the process engaging, 
                        educational, and rewarding. Our platform helps users track their daily activities, understand their environmental 
                        impact, and encourages sustainable habits through a gamified experience.
                    </p>
                </section>

                <section className="max-w-3xl text-center mb-10">
                    <h2 className="text-2xl font-semibold">Why We Exist</h2>
                    <p>
                        Climate change is one of the biggest challenges of our time, and everyone has a role to play. By providing a platform 
                        to measure and reduce personal carbon emissions, we enable individuals to take small, meaningful steps toward a more 
                        sustainable future.
                    </p>
                </section>

                <section className="max-w-3xl text-center mb-10">
                    <h2 className="text-2xl font-semibold">What We Do</h2>
                    <ul className="list-disc pl-5 text-left mx-auto">
                        <li><strong>Track Your Carbon Footprint:</strong> Measure your daily emissions based on transportation, diet, and energy usage.</li>
                        <li><strong>Earn Rewards:</strong> Participate daily to earn points, build streaks, and unlock badges.</li>
                        <li><strong>Join the Community:</strong> See how your efforts compare to others on the leaderboard, and work together to achieve collective sustainability goals.</li>
                        <li><strong>Learn and Grow:</strong> Get insights into your behavior and tips to improve your environmental impact.</li>
                    </ul>
                </section>

                <section className="max-w-3xl text-center mb-10">
                    <h2 className="text-2xl font-semibold">Get Involved</h2>
                    <p>
                        Start reducing your carbon footprint today! By making small, informed choices each day, you can contribute to a more sustainable future. 
                        Track your progress, earn rewards, and challenge yourself to become a climate hero.
                    </p>
                </section>

                <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-6 md:space-y-0 md:space-x-8">
                    <a href="https://www.linkedin.com/in/ehab-abdalla-04ab411b3/" target="_blank" rel="noopener noreferrer">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600 hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/zian.jpg"
                                alt="Person 1"
                                width="128"
                                height="128"
                                className="object-cover"
                            />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/loyd-flores/" target="_blank" rel="noopener noreferrer">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600 hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/Jonn.jpg"
                                alt="Person 2"
                                width="128"
                                height="128"
                                className="object-cover"
                            />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/davidmejia1/" target="_blank" rel="noopener noreferrer">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600 hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/Fezan.jpg"
                                alt="Person 3"
                                width="128"
                                height="128"
                                className="object-cover"
                            />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/mohammed-zian-hassan/" target="_blank" rel="noopener noreferrer">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600 hover:scale-105 transition-transform duration-300">
                            <img
                                src="/../../public/images/Abraham.jpg"
                                alt="Person 4"
                                width="128"
                                height="128"
                                className="object-cover"
                            />
                        </div>
                    </a>
                </div>

                <h2 className="text-3xl font-bold mt-12 text-center">Join Us in Making a Difference</h2>
                <p className="text-lg max-w-3xl text-center mt-6 mb-10">
                    By understanding your impact, you can contribute to a sustainable future. Together, we can create meaningful change!
                </p>
            </motion.div>
        </>
    );
}
