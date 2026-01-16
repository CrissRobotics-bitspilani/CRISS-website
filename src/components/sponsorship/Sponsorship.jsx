import styles from "./sponsorship.module.scss";
import { Helmet } from "react-helmet";
import SponzCard from "./SponzCard/SponzCard";
import { motion } from "framer-motion";
import { HeadAnimation, slideAnimation } from "../Header/Motion/Motion";

import SponsorshipPic1 from "../../assets/images/Sponsorship/Sponsorship-1.png";
import SponsorshipPic3 from "../../assets/images/Sponsorship/Sponsorship-3.png";

import bits from "../../assets/images/Homepage/bits.png";
import altium from "../../assets/images/Homepage/altium.png";
import ansys from "../../assets/images/Homepage/ansys.png";
import autodesk from "../../assets/images/Homepage/autodesk.jpeg";
import pcb from "../../assets/images/Homepage/pcb.png";
import sigma from "../../assets/images/Homepage/sigma.png";
import skf from "../../assets/images/Homepage/skf.png";
import solidworks from "../../assets/images/Homepage/solidworks.jpg";
import speedacc from "../../assets/images/Homepage/speedacc.png";
import optica from "../../assets/images/Homepage/optica.webp";
import srt from "../../assets/images/Homepage/srt.png";
import dwart from "../../assets/images/Homepage/dwart.jpg";
import brochureImg from "../../assets/images/Sponsorship/image 22.png";

import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";

const supportContent = [
    {
        id: 1,
        heading: 'Components',
        para: 'Supply the parts required for building our Mars Rover, contributing directly to its development and functionality.'
    },
    {
        id: 2,
        heading: 'Knowledge',
        para: 'Provide guidance and expertise in technical knowledge, helping our team refine and enhance their skills and designs.'
    },
    {
        id: 3,
        heading: 'Machining',
        para: 'Assist with the manufacturing or processing of various rover parts, ensuring precision and quality in our construction.'
    },
    {
        id: 4,
        heading: 'Financial Support',
        para: 'Offer monetary assistance to cover costs related to the purchase and manufacturing of rover components, enabling us to achieve our project goals.'
    },
]

export default function Sponsorship() {
    return (
        <>
            <Helmet>
                <title>Criss Robotics | Sponsorship</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main className={styles.sponsorshipContainers}>
                <div className={styles.OurSponsors}>
                    <motion.h1 className={styles.heading2} {...slideAnimation("up", 0.1)}>
                        Our <span>Sponsors</span>
                    </motion.h1>
                    <motion.p {...slideAnimation("up", 0.3)}>
                        Sponsors play a crucial role in the success story of CRISS Robotics.
                        Their steadfast support, providing essential financial and technical
                        resources, has been pivotal in driving our team forward towards
                        achieving our objectives. We deeply appreciate the commitment and
                        partnership of all our sponsors and look forward to nurturing and
                        expanding these relationships in the pursuit of continued excellence
                        and innovation.{" "}
                    </motion.p>
                </div>

                <div className={styles.total}>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={bits}
                            link="https://www.bits-pilani.ac.in/"
                        ></SponzCard>{" "}
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={optica}
                            link="https://www.opticsindia.com/?srsltid=AfmBOopuqBhsJTXnQ8T3o_woMLNCIr3rGvuJ4t-7Yf_85pwPLK6AmXzg"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={srt}
                            link="https://www.shreerapid.com"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={dwart}
                            link="https://dwartindustries.com/"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={autodesk}
                            link="https://www.autodesk.com/in?mktvar002=afc_in_nmpi_ppc&AID=13084956&PID=8206971&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&&cjevent=a415b36419b312da0589d5fad647a89c&click_id=a415b36419b312da0589d5fad647a89c&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&msclkid=a415b36419b312da0589d5fad647a89c"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard photo={pcb} link="https://www.pcbpower.com/"></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard photo={speedacc} link=""></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={sigma}
                            link="https://sigmaclothing.in"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={altium}
                            link="https://www.altium.com/"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard photo={ansys} link="https://www.ansys.com/"></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard
                            photo={solidworks}
                            link="https://www.solidworks.com/"
                        ></SponzCard>
                    </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}>
                        <SponzCard photo={skf} link="https://www.skf.com/in"></SponzCard>
                    </motion.div>
                </div>

                <div className={styles.becomeSponz}>
                    <h3>Become A Sponsor</h3>
                    <motion.div {...slideAnimation("up", 0.3)}>
                        <p>
                            <span className={styles.one}>CRISS</span>{" "}
                            <span className={styles.two}>Robotics</span> is a student-led
                            robotics and space engineering team from{" "}
                            <strong> BITS Pilani (Pilani Campus)</strong>, consisting of 60+
                            dedicated engineers and researchers. We represent our institute at
                            prestigious platforms such as the
                            <strong> University Rover Challenge (URC)</strong> organized by
                            the Mars Society and
                            <strong> APOGEE</strong>, BITS Pilani’s flagship technical
                            festival. Our work reflects innovation, technical excellence, and
                            a strong commitment to advancing space and robotics research.
                        </p>
                        <p>
                            By <strong> sponsoring CRISS Robotics</strong>, you directly
                            support cutting-edge R&D, international competition participation,
                            and the development of next-generation robotic systems. Sponsors
                            receive strong brand visibility through logo placement on our
                            rover and merchandise, exposure across our social media platforms,
                            and engagement opportunities during major technical events and
                            festivals.
                        </p>
                    </motion.div>
                </div>

                <div className={styles.whySponz}>
                    <h3>Why Sponsor Us ?</h3>
                    <div className={styles.whySponzContent}>
                        <motion.img
                            src={SponsorshipPic1}
                            className={styles.pic1}
                            {...slideAnimation("left", 0.5)}
                        />
                        <motion.p {...slideAnimation("right", 0.5)}>
                            CRISS Robotics is a young, student-led team that has already
                            demonstrated proven success and dedication, including winning
                            international design competitions that showcase our technical
                            excellence, innovation, and commitment to quality engineering. As
                            part of the prestigious BITS Pilani ecosystem, we continuously
                            push the boundaries of robotics and space technology while
                            representing our institute on global platforms.
                        </motion.p>
                    </div>
                    <div className={styles.whySponzContent}>
                        <motion.p {...slideAnimation("left", 0.5)}>
                            Sponsoring CRISS Robotics offers a unique opportunity to partner
                            with a dynamic BITSian team at an early stage while gaining
                            visibility within an innovation-driven academic and technical
                            community. Your support helps foster innovation and engineering
                            excellence, inspired by India’s space missions, by enabling the
                            development of competitive, cost-effective robotic and space
                            exploration systems and empowering the next generation of
                            engineers.
                        </motion.p>
                        <motion.img
                            src={SponsorshipPic3}
                            className={styles.pic2}
                            {...slideAnimation("right", 0.5)}
                        />
                    </div>
                    <motion.img
                        src={SponsorshipPic1}
                        className={styles.mobilePic}
                        {...slideAnimation("left", 0.5)}
                    />
                </div>

                <div className={styles.brochure}>
                    <h3>How Can You Support Us ?</h3>
                    <div className={styles.brochureContent}>
                        <a className={styles.brochureLink} href="https://online.fliphtml5.com/zusvs/vefu/" target="_blank">
                            <motion.img
                                {...slideAnimation("left", 0.5)}
                                src={brochureImg}
                            ></motion.img>
                        </a>
                        <div className={styles.supportWrapper}>
                            {supportContent.map((item) => (
                                <div className={styles.supportContent} key={item.id}>
                                    <h5>{item.heading}</h5>
                                    <p>{item.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
