import React from 'react';

export function About() {
    return (
        <div className="mt-10 p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-4xl font-bold text-center text-green-600">About Us</h1>
            
            <section>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p>
                    We aim to empower individuals to take action in reducing their carbon footprint by making the process engaging, 
                    educational, and rewarding. Our platform helps users track their daily activities, understand their environmental 
                    impact, and encourages sustainable habits through a gamified experience.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Why We Exist</h2>
                <p>
                    Climate change is one of the biggest challenges of our time, and everyone has a role to play. By providing a platform 
                    to measure and reduce personal carbon emissions, we enable individuals to take small, meaningful steps toward a more 
                    sustainable future.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">What We Do</h2>
                <ul className="list-disc pl-5">
                    <li><strong>Track Your Carbon Footprint:</strong> Measure your daily emissions based on transportation, diet, and energy usage.</li>
                    <li><strong>Earn Rewards:</strong> Participate daily to earn points, build streaks, and unlock badges.</li>
                    <li><strong>Join the Community:</strong> See how your efforts compare to others on the leaderboard, and work together to achieve collective sustainability goals.</li>
                    <li><strong>Learn and Grow:</strong> Get insights into your behavior and tips to improve your environmental impact.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Get Involved</h2>
                <p>
                    Start reducing your carbon footprint today! By making small, informed choices each day, you can contribute to a more sustainable future. 
                    Track your progress, earn rewards, and challenge yourself to become a climate hero.
                </p>
            </section>
        </div>
    );
}
