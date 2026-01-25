import React from "react";
import styles from "./ircpage.module.scss";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { HeadAnimation } from "../Header/Motion/Motion.jsx";

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";
import InfoContainer from "./InfoContainer/InfoContainer.jsx";
import ircLogo from "../../assets/images/IRC/spros.png";

const infoData = [
  {
    heading: "ABOUT IRC",
    para1:
      "Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January 2018. Over the years, IRC has established itself as one of the leading space robotics competitions, drawing top student teams from around the globe.",
    para2:
      "For IRC 2026, the competition further reinforces its focus on systems engineering excellence. This edition highlights best practices across the complete project life cycle of Mars rover development from conceptual design and prototyping to testing, mission execution, and final evaluation.",
    para3: null,
    para4: null,
    para5: null,
  },
  {
    heading: "COMPETITION OVERVIEW",
    para1:
      "SPROS IRC is a space robotics engineering competition. It challenges university students to conceptualise, design, develop and operate an astronaut-assistive next-generation space Rover and perform specific missions in Mars simulated conditions.",
    para2:
      "The objective of the competition is to provide students with a real-world interdisciplinary engineering experience, combining practical engineering skills with soft skills, including business planning and project management.",
    para3: null,
    para4: null,
    para5: null,
  },
  {
    heading: "TEAMS AND PARTICIPATION",
    para1: "All teams are required to declare their intent to participate and complete registration within the designated timeframe. Teams must submit a System Design and Development Review (SDDR) package that addresses both technical and project management aspects of rover development. This includes details on team organization, resource allocation, project planning, preliminary budgeting, sponsorships, recruitment processes, educational and public outreach initiatives, as well as technical components such as rover design and testing methodology.",
    para2: "All participating teams will go through a review and down-selection process during the qualifiers. Only the top 26 teams that successfully meet each milestone will advance to the on-site Finals. Complete information, including submission guidelines and deadlines, will be published on the SPROS and IRC websites. At any milestone, officials may request additional clarifications or follow-up information from teams.",
    para3: "There will be no down-selection for the International Space Drone Challenge. Teams qualifying for the IRC Finals will automatically be eligible to participate in the drone category. Of the 26 finalist teams, three wildcard slots are reserved for non-Asian teams. Wildcard applicants must present their rover in a live session before the judging panel by November 20, 2025.",
    para4: "There is no limit on the number of students per team participating in the Finals.",
    para5: null,
  },
  {
    heading: "COMPETITION MISSIONS",
    para1: "The Finals consist of missions categorized as Expeditions, Operations, and Assessments. Expeditions like the Astrobiology Expedition (ABEx) involve mobile scientific laboratory tasks, Reconnaissance & Delivery Operation (RDO) focuses on item retrieval and delivery, while Autonomous Expedition (AutEx) tests the rover's autonomous navigation capabilities.",
    para2: "Instrument Deployment & Maintenance Operation (IDMO) involves precise maintenance tasks, and the assessment missions include Project Implementation & Management Assessment (PIMA) and Business Plan Presentation (BPP), focusing on project management and business strategy aspects.",
    para3: null,
    para4: null,
    para5: null,
  },
  {
    heading: "SYSTEM DESIGN AND DEVELOPMENT REVIEW (SDDR)",
    para1: "Teams are required to submit a System Design and Development Review (SDDR) package before November 20, 2025. The SDDR package will focus on both technical and project management aspects of the rover development and has written report and video components.",
    para2: (<><strong>Project Management Aspects:</strong> Teams shall include the organizational structure of the team, resources management, project planning, a PERT chart showing the project timeline, initial budget, fundraising plans, sponsorships, team’s recruitment process, educational and public outreach.</>),
    para3: (<><strong>Technical Aspects:</strong> Teams shall include the current state of the rover development and prototypes, overall system design, science strategy, and team’s prototype testing strategy.</>),
    para4: "The video component will be a 5-minute video showcasing salient features of rover design and its readiness. The top 26 teams will advance to the on-site finals based on their normalized score from IRDC and SDDR. All the teams qualified for the IRC Finals will have to confirm their participation by December 5, 2025 at Manipal Institute of Technology Campus, Karnataka, India. If a qualified team is unable to participate in the Finals due to a particular reason, then its spot will be transferred to the highest-ranked reserve team.",
    para5: null,
  },
  {
    heading: "Competition Missions (Finals)",
    para1: "The IRC Finals are divided into three categories – Expeditions, Operations, and Assessments.",
    para2: (<><strong>Expeditions:</strong> Missions investigatory in nature with both dynamic and static components. Teams present findings and results to judges after mission completion.</>),
    para3: (<><strong>Operations:</strong> Missions with only dynamic components where the rover performs specific tasks in the field.</>),
    para4: (<><strong>Assessments:</strong> Static missions like Project Implementation and Management Assessment (PIMA) and Business and Partnership Plan (BPP).</>),
    para5: "Teams have a maximum of 30 minutes to complete a field mission. If completed in less than 20 minutes, the team receives a 20% bonus. \n If a rover doesn’t cross the starting line within the first 10 minutes, the mission is aborted. Teams scoring more than 20% points in the first 20 minutes can utilize the entire 30-minute mission time; otherwise, they must stop after 20 minutes. \n All penalties are additive; e.g., penalties of 10% and 20% result in a score of 70%. All missions are scored independently, and a score less than zero is not possible."
  },
  {
    heading: "Sproscape",
    para1: "The IRC 2026 Finals will be performed within a specially designed 20,000 square meter simulated landscape called Sproscape. It will be the world’s largest arena of its kind.",
    para2: (<><strong>Astrobiology Expedition:</strong> The rover acts as a Mobile Science Laboratory to collect samples and perform analysis to seek signs of life.</>),
    para3: (<><strong>Reconnaissance and Delivery Operation:</strong> The rover reconnaissance an area to search, locate, pick up, and deliver objects to specific locations.</>),
    para4: (<><strong>Instrument Deployment and Maintenance Operation:</strong> The rovers traverses a short distance to operate on a mock-up instrument panel to perform a set of precise operations.</>),
    para5: (<><strong>Project Implementation and Management Assessment:</strong> PIMA will have one-to-one interaction between the teams and the judges about their rover development.</>),
  },
];

export default function IRCPage() {
  return (
    <>
      <Helmet>
        <title>Criss Robotics | IRC</title>
      </Helmet>
      <TransitionEffect></TransitionEffect>
      <header>
        <Navbar color="#00275B" />
      </header>
      <main className={styles.ircpage}>
        <section className={styles.hero}>
          <div className={styles.content}>
            <span className={styles.ircBadge}>International Competition</span>
            <h1>International Rover Challenge</h1>
            <p>
              A premier space robotics competition organized by the Space
              Robotics Society, challenging university students worldwide to
              design and build next-generation Mars rovers.
            </p>
            <div className={styles.ircHeroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Teams Worldwide</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>22</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2017</span>
                <span className={styles.statLabel}>Established</span>
              </div>
            </div>
            <div className={styles.ircLogo}>
              <img src={ircLogo}></img>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.infoSection}>
        {infoData.map((data, index) => (
          <motion.div
            {...HeadAnimation(index % 2 === 0 ? "right" : "left", 0.1)}
          >
            <InfoContainer
              key={data.index}
              heading={data.heading}
              para1={data.para1}
              para2={data.para2}
              para3={data.para3}
              para4={data.para4}
              para5={data.para5}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
}
