import React from "react";
import { auth } from "../firebase";
import DashboardHeader from "../components/DashboardHeader";
import { useNavigate, Link } from "react-router-dom";
import { LeaderBoard } from "../components/LeaderBoard";
import Streak from "../components/Streak";
import { UserInputForm } from "../components/UserInputForm";

export function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const styles = {
    container: `bg-gradient-to-r from-green-200 to-blue-200 min-h-screen flex flex-col bg-green-50`, // Matches the light background
    section: `flex flex-col flex-grow py-20 px-4 justify-center`, // Added consistent padding
    formStreakContainer: `flex flex-wrap justify-between mb-16`, // Consistent margin between elements
    formSection: `w-full md:w-1/2 p-4`, // Flexbox layout for form and streak
    streakSection: `w-full md:w-1/2 p-4`,
    leaderboard: `bg-green-50 `, // Matches the leaderboard section background with padding
    quizButtonContainer: `flex justify-center mt-12`, // Consistent spacing
    quizButton: `block w-full max-w-sm py-4 px-6 text-center text-white bg-green-500 rounded-full text-lg hover:bg-green-600 font-bold` // Consistent button styling
  };

  return (
    <>
      <DashboardHeader handleLogout={handleLogout} />

      <div className={styles.container}>
        <div className={styles.section}>
          {/* Form and Streak section */}
          <div className={styles.formStreakContainer}>
            <div className={styles.formSection}>
              <UserInputForm />
            </div>

            <div className={styles.streakSection}>
              <Streak />
            </div>
          </div>

          {/* Leaderboard section */}
          <div className={styles.leaderboard}>
            <LeaderBoard />
          </div>

          {/* Start Quiz Button */}
          <div className={styles.quizButtonContainer}>
            <Link
              to="/quiz-levels"
              className={styles.quizButton}
            >
              Start Carbon Quiz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
