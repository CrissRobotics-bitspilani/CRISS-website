import { Helmet } from 'react-helmet';
import styles from "./achievements.module.scss";

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";

import erc from "../../assets/images/Achievements/Logo/erc.jpg";
import irdc from "../../assets/images/Achievements/Logo/irc.png";
import robofest from "../../assets/images/Achievements/Logo/robofest.png";

import "./new.scss";

const achievements = [
    {
        id: 1,
        year: '2025',
        title: 'European Rover Challenge 2025',
        description: 'In the European Rover Challenge 2025, our team delivered a remarkable performance by securing 1st place in Asia and finishing 2nd internationally. This achievement highlights our continuous improvement in rover autonomy, navigation, and mission reliability at a highly competitive global platform.',
        award: '1st in Asia, 2nd Internationally – ERC 2025',
        image: '',
        logo: erc,
        side: 'left'
    },
    {
        id: 2,
        year: '2025',
        title: 'International Rover Design Challenge 2025',
        description: 'At the International Rover Design Challenge 2025, our team secured 3rd Rank overall, showcasing strong advancements in rover mechanics, electronics integration, and mission strategy. This result reflects our team’s consistent growth and dedication to high-performance rover engineering.',
        award: '3rd Rank Overall – IRDC 2025',
        image: '',
        logo: irdc,
        side: 'right'
    },
    {
        id: 3,
        year: '2025',
        title: 'Gujarat Robofest 4.0',
        description: 'We successfully cleared the ideation phase (Level 1) at Gujarat Robofest 4.0 and were selected for Level 2, which is currently in progress. Our innovative concept and technical feasibility earned us a prize money of ₹2.5 Lakhs, validating the real-world impact and scalability of our solution.',
        award: 'Won Ideation Phase (Level 1), ₹2.5 Lakhs Prize – Gujarat Robofest 4.0',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
        logo: robofest,
        side: 'left'
    },
    {
        id: 4,
        year: '2024',
        title: 'International Rover Challenge 2024',
        description: 'During the International Rover Challenge 2024, we were honored with the Best Business Plan Award for our detailed rover commercialization and sustainability strategy. Competing against top international teams, we secured an overall rank of 10th and finished 2nd in the PIMA evaluation, reflecting our strong balance of technical execution and strategic planning.',
        award: 'Best Business Plan Award, PIMA 2nd, Overall Rank 10 – IRC 2024',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
        logo: irdc,
        side: 'right'
    },
    {
        id: 5,
        year: '2023',
        title: 'European Rover Challenge 2023',
        description: 'At the European Rover Challenge 2023, our team demonstrated strong technical excellence and operational reliability, finishing 2nd in Asia and 5th Worldwide. Additionally, we were recognized with the Best in Maintenance award for our rover’s modular design, quick servicing capability, and sustained performance during missions.',
        award: '2nd in Asia, 5th Worldwide, Best in Maintenance – ERC 2023',
        image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600',
        logo: erc,
        side: 'left'
    },
    {
        id: 6,
        year: '2023',
        title: 'International Rover Design Challenge 2023',
        description: 'Our team achieved an outstanding milestone at the International Rover Design Challenge (IRDC) 2023 by securing 1st Rank with our Curie Rover. The competition evaluated rover design, innovation, and mission execution, and our rover stood out for its robust engineering, system integration, and performance across multiple challenge scenarios.',
        award: '1st Rank with Curie Rover at IRDC 2023',
        image: '',
        logo: irdc,
        side: 'right'
    },
];

export default function Achievements() {
    return (
        <>
            <Helmet>
                <title>Criss Robotics | Achievements</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main className={styles.main}>
                <h2>Our<span>Achievements</span></h2>

                <div className="mainContainer">
                    <div className="timeline">
                        <div className="timeline-line"></div>

                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className={`timeline-item ${achievement.side}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="timeline-content">
                                    <div className="year-badge">
                                        <span>{achievement.year}</span>
                                    </div>

                                    <div className="content-card">
                                        <div className="card-body">
                                            <h3>{achievement.title}</h3>
                                            <p className="description">{achievement.description}</p>

                                            <div className="award-badge">
                                                <span></span>
                                               <p>{achievement.award}</p>
                                            </div>
                                        </div>
                                        <div className="card-image">
                                            <img src={achievement.image} alt={achievement.title} draggable={false}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-dot">
                                    <img src={achievement.logo} alt="Achievement Logo" draggable={false}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
