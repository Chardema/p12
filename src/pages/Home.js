import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

/**
 * Home component that renders a simple user selection interface.
 * Users can choose from two available users with their respective IDs.
 *
 * @component
 */
const Home = () => {
  const navigate = useNavigate();

  /**
   * Navigates to the dashboard of the selected user based on the user ID.
   *
   * @param {number} id - The ID of the selected user.
   */
  const navigateToDashboard = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className={styles.home}>
      <h1>Choisissez un utilisateur</h1>
      <div className={styles.buttoncontainer}>
        <button
          className={styles.button}
          onClick={() => navigateToDashboard(12)}
        >
          Utilisateur ID 12 (Karl)
        </button>
        <button
          className={styles.button}
          onClick={() => navigateToDashboard(18)}
        >
          Utilisateur ID 18 (Cecilia)
        </button>
      </div>
    </div>
  );
};

export default Home;
