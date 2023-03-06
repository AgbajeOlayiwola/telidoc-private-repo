import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import RegisterBtn from "../../components/buttons/Register";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import BuyMeds from "../../components/SVGs/buyMeds";
import Checksvg from "../../components/SVGs/checksvg";
import ConsultationSvg from "../../components/SVGs/consultationSvg";
import DiagnosisSvg from "../../components/SVGs/diagnosisSvg";
import HelthTips from "../../components/SVGs/helthTips";
import styles from "./styles.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import GeneralPracticeSvg from "../../components/SVGs/generalPracticeSvg";
import BabyboySvg from "../../components/SVGs/babyboySvg";
import ScalpleSvg from "../../components/SVGs/scalpleSvg";
import ViginalSvg from "../../components/SVGs/viginalSvg";
import DermatologySvg from "../../components/SVGs/dermatologySvg";
import VirusSvg from "../../components/SVGs/virusSvg";
import BackSvg from "../../components/SVGs/backSvg";

const Homepage = () => {
  const [width, setWidth] = useState(991);

  const [height, setHeight] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(width);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  return (
    <div>
      <Layout back="">
        <Cover>
          <div className={styles.heroSection}>
            <div className={styles.heroSectionI}>
              <h1>Serving your health needs is our priority.</h1>
              <p className={styles.heroSectionIP}>
                Sanar provides a suite of digital solutions for both pharmacy
                businesses and patient care. For pharmacy businesses, our
                digital platform enables a frictionless buying and selling of
                pharmacy products. For patient care, our digital engagement
                platform provides solutions for the interactions between
                patients, doctors and providers.
              </p>

              <div className={styles.regBtn}>
                <RegisterBtn />
              </div>
            </div>
            <div>
              <Image
                src="/Assets/Images/heroHeader.png"
                width={width > 990 ? 609 : 270}
                height={width > 990 ? 609 : 270}
                alt="tellidoc image"
              />
            </div>
          </div>
        </Cover>
        <div className={styles.specialisationBg}>
          <Cover>
            {/* section 1 */}
            <div className={styles.specials}>
              <div className={styles.specialisationSect}>
                <h1>Our specializations</h1>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                  nisl.{" "}
                </p>
              </div>
              <div className={styles.mainSpecialisations}>
                <div>
                  <div>
                    <GeneralPracticeSvg />
                  </div>
                  <h2>General Practice</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <BabyboySvg />
                  </div>
                  <h2>Pediatrics</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <ScalpleSvg />
                  </div>
                  <h2>Surgery</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
              </div>
              {/* section 2 */}

              <div className={styles.mainSpecialisations}>
                <div>
                  <div>
                    <ViginalSvg />
                  </div>
                  <h2>Obstetrics & Gynecology</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <DermatologySvg />
                  </div>
                  <h2>Dermatology</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <VirusSvg />
                  </div>
                  <h2>Infectious disease</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.joinBg} id="joinArea">
          <Cover>
            <div className={styles.joinSect}>
              <div className={styles.joinSectInn}>
                <h1>Are you a medical doctor?</h1>
                <p className={styles.joinsSectP}>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                  nisl. Odio faucibus gravida{" "}
                </p>
                <div className={styles.joinBtnCov}>
                  <Link href="Auth">
                    <div className={styles.joinbtn}>
                      <p>JOIN US</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.consultbg}>
          <Cover>
            <div className={styles.consultCover}>
              <div>
                <Image
                  src="/Assets/Images/DoctorOla.png"
                  width={width > 990 ? 478 : 278}
                  height={width > 990 ? 616 : 316}
                  alt="doctorola"
                />
              </div>
              <div className={styles.consult}>
                <h1>Consult a doctor anytime and anywhere</h1>
                <p className={styles.consultP}>
                  Save yourself time and distance by easily talking to your
                  doctor in a video consultation,The video consultation connects
                  doctors and patients.
                </p>
                <div className={styles.consultCheck}>
                  <div className={styles.checklist}>
                    <Checksvg />
                    <p>Aliquam aliquet tristique orci amet. Purus elit, </p>
                  </div>
                  <div className={styles.checklist}>
                    <Checksvg />
                    <p>Aliquam aliquet tristique orci amet. Purus elit, </p>
                  </div>
                  <div className={styles.checklist}>
                    <Checksvg />
                    <p>Aliquam aliquet tristique orci amet. Purus elit, </p>
                  </div>
                </div>
                <div className={styles.registerDiv}>
                  <RegisterBtn />
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.servicesCover}>
          <Cover>
            <div className={styles.healthServices}>
              <h1>Health services for you</h1>
              <p>
                Telidoc provides health care services and online consultations
                through doctors from various specializtions
              </p>
            </div>
            <div className={styles.servicfesMain}>
              <div>
                <div className={styles.servicesSvg}>
                  <DiagnosisSvg />
                </div>
                <h2>Diagnosis</h2>
                <p>
                  We offer physical examinations, and tests, such as blood
                  tests, imaging tests, and biopsies, etc.
                </p>
              </div>
              <div>
                <div className={styles.servicesSvg}>
                  <ConsultationSvg />
                </div>
                <h2>Online consultation</h2>
                <p>
                  Get a licensed doctors consultation in a few minutes. The
                  doctor is waiting for you.
                </p>
              </div>
              <div>
                <div className={styles.servicesSvg}>
                  <BuyMeds />
                </div>
                <h2>Buy medicine</h2>
                <p>
                  Save Time Live Healthy Be Happy. Buy your medications easily.
                </p>
              </div>
              <div>
                <div className={styles.servicesSvg}>
                  <HelthTips />
                </div>
                <h2>Health tips</h2>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.servicesCover}>
          <Cover>
            <div className={styles.easyConsult}>
              <p>4 easy steps to consult a doctor</p>
            </div>
            <div className={styles.steps}>
              <div>
                <h2>01</h2>
                <h3>Search doctor</h3>
                <p>
                  Search for a doctor through the list of our available doctors
                  and select a doctor of your choosing.
                </p>
              </div>
              <div>
                <h2>02</h2>
                <h3>Check doctor profile</h3>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
              <div>
                <h2>03</h2>
                <h3>Schedule appointment</h3>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
              <div>
                <h2>04</h2>
                <h3>Meet with the doctor</h3>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.doctorsBg}>
          <Cover>
            <div className={styles.quailified}>
              <h1>Our highly qualified doctors</h1>
              <Link href="/Doctors">
                <span>
                  <p>SEE MORE </p> <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className={styles.doctors}>
              <div>
                <Image
                  src="/Assets/Images/Doctor1.png"
                  width={320}
                  height={371}
                  alt="Telidoc Doctors"
                />
                <h2>Dr. Femi Olaleye Dr.</h2>
                <p>GENERAL PRACTIONER</p>
              </div>
              <div>
                <Image
                  src="/Assets/Images/Doctor2.png"
                  width={320}
                  height={371}
                  alt="Telidoc Doctors"
                />
                <h2>Mohammed Isa</h2>
                <p>SURGEON</p>
              </div>
              <div>
                <Image
                  src="/Assets/Images/Doctor3.png"
                  width={320}
                  height={371}
                  alt="Telidoc Doctors"
                />
                <h2>Dr. Chinelo Ugwanyi</h2>
                <p>NEUROLOGIST</p>
              </div>
            </div>
            <div></div>
          </Cover>
        </div>
        <div className={styles.testimonialsBg}>
          <Cover>
            <div className={styles.testiomonialInnerBg}>
              <div className={styles.testiOuter}>
                <div className={styles.testInner}>
                  <h1>Testimonials</h1>
                  <p>
                    “Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida Arcu blandit sapien, pulvinar
                    magna lorem in adipiscing tristique. Ullamcorper amet sit
                    feugiat turpis odio arcu, nisl. Odio faucibus gravida Arcu
                    blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat”
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.mainProfile}>
                      <Image
                        src="/Assets/Images/ProfileImage.png"
                        width={24}
                        height={24}
                        alt="profileImage"
                      />
                      <p>Bayo Oloyede</p>
                    </div>
                    <Link href="#">
                      <p className={styles.arrowRight}>
                        {" "}
                        <BackSvg />
                        <AiOutlineArrowRight />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Cover>
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
