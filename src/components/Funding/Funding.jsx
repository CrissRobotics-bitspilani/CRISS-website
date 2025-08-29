import React from "react";
import styles from "./funding.module.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";
import PaymentPortal from "./PaymentPortal/PaymentPortal";

export default function Funding() {
    return (
        <>
            <Helmet>
                <title>Criss Robotics | Team</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>

            <div className={styles.mainContainer}>
                <h2 className={styles.heading}>Support Our Cause</h2>
                <p className={styles.description}>
                    Your contributions help us continue our mission. Every donation, big or small, makes a difference.
                </p>
                <PaymentPortal />
            </div>

            <Footer />
        </>
    )
}