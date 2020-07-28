import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Link to="/films"  style={{textDecoration: "none"}}>
                <div className={styles.menuElement}>Films</div>
            </Link>
            <Link to="/people"  style={{textDecoration: "none"}}>
                <div className={styles.menuElement}>People</div>
            </Link>
            <Link to="/planets"  style={{textDecoration: "none"}}>
                <div className={styles.menuElement}>Planets</div>
            </Link>
            <Link to="/species"  style={{textDecoration: "none"}}>
                <div className={styles.menuElement}>Species</div>
            </Link>
            <Link to="/starships"  style={{textDecoration: "none"}}>
                <div className={styles.menuElement}>Starships</div>
            </Link>
            <Link to="/vehicles"  style={{textDecoration: "none"}}>
                <div className={styles.menuElement}>Vehicles</div>
            </Link>
        </div>
    )
}

export default Sidebar;
