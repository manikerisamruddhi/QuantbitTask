import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Import the styles

function Home() {
  return (
    <div className={styles['home-container']}> {/* Use styles object */}
      <h1>Home Page</h1>
      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
}

export default Home;
