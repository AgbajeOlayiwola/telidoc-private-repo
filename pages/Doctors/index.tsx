import React, { useState, useEffect } from "react";
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
import DoctorsCard from "../../components/DoctorsCard/doctorsCard";

const Doctors = () => {
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
                  <div key={index} className={styles.gridIndex}>
                    <DoctorsCard
                      index={index}
                      image={item.picture}
                      name={item.name}
                      title={item.title}
                      alt={item.name}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </Cover>
      </div>
    </Layout>
  );
};

export default Doctors;
