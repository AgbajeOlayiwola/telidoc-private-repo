import React, { useState } from "react";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import styles from "./styles.module.css";
import { doctorsData } from "../../components/Data";
import Image from "next/image";
import { isTemplateMiddle } from "typescript";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Modal from "react-modal";
import StarSvg from "../../components/SVGs/starSvg";
import Link from "next/link";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "80vh",
    width: "60%",
    color: "#3e3e3e",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    // backdropFilter: 'blur(28.8462px)',
    border: "none",
  },
  overlay: {
    backgroundColor: "papayawhip",
    zIndex: "4",
    background: "rgba(26, 26, 26, 0.5)",
    backdropFilter: "blur(28.8462px)",
  },
};
const Doctors = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // background.style.color = 'rgba(26, 26, 26, 0.5)';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Layout back="true">
      <div>
        <Cover>
          <div className={styles.qualified}>
            <h1>Our highly qualified doctors</h1>
          </div>
        </Cover>
      </div>
      <div className={styles.doctorListBg}>
        <Cover>
          <div className={styles.Gris}>
            {doctorsData.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={openModal}
                    className={styles.gridIndex}
                  >
                    <Image
                      src={item.picture}
                      width={320}
                      height={372}
                      alt={item.name}
                    />
                    <h2>{item.name}</h2>
                    <p>{item.title}</p>
                  </div>
                </>
              );
            })}
          </div>
        </Cover>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.doctorProfile}>
          <div>
            <Image
              src="/Assets/Images/PreviewImage.png"
              width={374}
              height={647}
              alt="Images"
              onClick={closeModal}
            />
          </div>
          <div className={styles.drInfoOuter}>
            <div className={styles.doctorsInfo}>
              <h1>Dr. Adewale Okemuyiwa</h1>
              <p className={styles.general}>GENERAL PRACTIONER</p>
              <p className={styles.fees}>Fees</p>
              <p className={styles.cost}>
                <span>N2,500.00</span> per consultation
              </p>
              <Link href="/Auth">
                <div className={styles.bookBtn}>
                  <p>BOOK AN APPOINTMENT</p>
                </div>
              </Link>
              <div className={styles.times}>
                <p>Available slots today</p>
                <div>
                  <p>10:00AM</p>
                  <p>12:30AM</p>
                  <p>11:20AM</p>
                  <p>06:00AM</p>
                </div>
              </div>
              <div className={styles.bioDiv}>
                <p>Bio</p>
                <p>
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                </p>
              </div>
              <div className={styles.bioDiv}>
                <p>Languages</p>
                <p className={styles.languages}>English, Spanish</p>
              </div>
              <div className={styles.rattingDiv}>
                <div>
                  <p>Rating</p>
                  <p>Patients</p>
                  <p>Experience</p>
                </div>
                <div>
                  <div className={styles.rate}>
                    <StarSvg />
                    <p>4.7</p>
                  </div>
                  <p>128</p>
                  <p>2 years</p>
                </div>
              </div>
              <div className={styles.reviews}>
                <p className={styles.reviewP}>Review</p>
                <div>
                  <div className={styles.reviewTop}>
                    <div className={styles.reviewTopInner}>
                      <Image
                        src="/Assets/Images/revieImage.png"
                        width={24}
                        height={24}
                        alt="revieImage"
                      />
                      <p>Feranmi Olowookere</p>
                    </div>
                    <p className={styles.date}>18 June 2021 08:45PM</p>
                  </div>
                  <div className={styles.revieContent}>
                    <p>
                      Libero habitant donec velit nec sit enim, enim curabitur.
                      Eu porttitor odio in mi sed mauris sapien elit. Et in ut
                      vel,{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.reviews}>
                <div>
                  <div className={styles.reviewTop}>
                    <div className={styles.reviewTopInner}>
                      <Image
                        src="/Assets/Images/revieImage.png"
                        width={24}
                        height={24}
                        alt="revieImage"
                      />
                      <p>Feranmi Olowookere</p>
                    </div>
                    <p className={styles.date}>18 June 2021 08:45PM</p>
                  </div>
                  <div className={styles.revieContent}>
                    <p>
                      Libero habitant donec velit nec sit enim, enim curabitur.
                      Eu porttitor odio in mi sed mauris sapien elit. Et in ut
                      vel,{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.reviews}>
                <div>
                  <div className={styles.reviewTop}>
                    <div className={styles.reviewTopInner}>
                      <Image
                        src="/Assets/Images/revieImage.png"
                        width={24}
                        height={24}
                        alt="revieImage"
                      />
                      <p>Feranmi Olowookere</p>
                    </div>
                    <p className={styles.date}>18 June 2021 08:45PM</p>
                  </div>
                  <div className={styles.revieContent}>
                    <p>
                      Libero habitant donec velit nec sit enim, enim curabitur.
                      Eu porttitor odio in mi sed mauris sapien elit. Et in ut
                      vel,{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Doctors;
