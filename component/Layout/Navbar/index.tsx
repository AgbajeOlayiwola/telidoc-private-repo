import LogoSvg from "@/component/SVGS/logoSvg"
import Link from "next/link"
import Cover from "../Cover"
import styles from './styles.module.css'

const Navbar = () => {
  return (
    <div  className={styles.navigationBg}>
      <Cover>
        <div className={styles.navigation}>
          <div className={styles.link}>
            <Link href="#">Home</Link>
            <Link href="#">Doctors</Link>
            <Link href="#">Services</Link>
            <Link href="#">Help</Link>
          </div>
          <div>
            <LogoSvg />
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Navbar
