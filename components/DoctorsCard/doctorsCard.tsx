import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Cover from "../Cover";
import StarSvg from "../SVGs/starSvg";

import styles from "./styles.module.css";

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
const customMobileStyles = {
  content: {
    top: "60%",
    bottom: "1%",
    left: "50%",
    right: "auto",
    height: "80vh",
    width: "100%",
    padding: "0px",
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

const DoctorsCard = ({
  index,
  image,
  name,
  title,
  alt,
}: {
  index: any;
  image: any;
  name: any;
  title: any;
  alt: any;
}) => {
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
    <>
      <Image
        src={image}
        width={320}
        height={372}
        alt={alt}
        onClick={openModal}
      />
      <h2 onClick={openModal}>{name}</h2>
      <p onClick={openModal}>{title}</p>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={width > 990 ? customStyles : customMobileStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.doctorProfile}>
          <div>
            <Image
              src={image}
              width={width > 990 ? 374 : 379}
              height={width > 990 ? 647 : 220}
              alt="Images"
              onClick={closeModal}
            />
          </div>
          <Cover>
            <div className={styles.drInfoOuter}>
              <div className={styles.doctorsInfo}>
                <h1>{name}</h1>
                <p className={styles.general}>{title}</p>
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
                        Libero habitant donec velit nec sit enim, enim
                        curabitur. Eu porttitor odio in mi sed mauris sapien
                        elit. Et in ut vel,{" "}
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
                        Libero habitant donec velit nec sit enim, enim
                        curabitur. Eu porttitor odio in mi sed mauris sapien
                        elit. Et in ut vel,{" "}
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
                        Libero habitant donec velit nec sit enim, enim
                        curabitur. Eu porttitor odio in mi sed mauris sapien
                        elit. Et in ut vel,{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Cover>
        </div>
      </Modal>
    </>
  );
};

export default DoctorsCard;
