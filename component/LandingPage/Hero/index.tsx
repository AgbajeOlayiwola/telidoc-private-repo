import Cover from "@/component/Layout/Cover"
import CloseCurlSvg from "@/component/SVGS/closeCurlSvg"
import OpenCurlSvg from "@/component/SVGS/openCurlSvg"
import Image from "next/image"
import styles from "./styles.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Cover>
        <div className={styles.quote}>
          <OpenCurlSvg />
          <div className={styles.heal}>
            <h1>
              Healing Lives, One Session at a Time, with therapy that works.
            </h1>
            <p>
              Specializing in medical therapy, features licensed therapists
              dedicated to providing effective care for individuals and
              teenagers, promoting mental and emotional well-being.
            </p>
          </div>
          <CloseCurlSvg />
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/Images/hero.png"
            width={586}
            height={546}
            alt="hero image"
          />
        </div>
        <div className={styles.heasl}>
          <h1>
            Tap into a network of credentialled and experienced therapists
          </h1>
          <p>Here’s a list of the various therapy options we offer </p>
        </div>
        <div className={styles.offeringd}>
          <div className={styles.offerins}>
            <div className={styles.offeringCOntent}>
              <Image
                src="/Images/left.png"
                width={126}
                height={126}
                alt="hero image"
              />
              <h2>Individual</h2>
              <p>
                Find tailored therapy with your chosen therapist for personal
                growth.
              </p>
            </div>
            <div className={styles.offeringCOntent}>
              <Image
                src="/Images/right.png"
                width={126}
                height={126}
                alt="hero image"
              />
              <h2>Teenager</h2>
              <p>
                Expert therapy for my child -connect with the therapist of your
                choice.
              </p>
            </div>
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Hero
