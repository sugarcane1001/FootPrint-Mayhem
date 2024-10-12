import React from 'react';

  
const styles = {
    card: `max-w-sm mx-auto my-5 p-5 border border-gray-200 rounded-lg shadow-md`,
    cardImage: `w-full h-48 object-cover rounded-md`,
    cardTitle: `mt-4 text-xl font-semibold`,
    cardDescription: `mt-2 text-gray-600`,
    featureList: `overflow-scroll h-screen`,
    featureListInner: `flex flex-col items-center`
  };

export function FeatureCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}



  
