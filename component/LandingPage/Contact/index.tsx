import Cover from "@/component/Layout/Cover"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import styles from './styles.module.css'
const Contact = () => {
  return (
    <div className={styles.cont}>
    <Cover>
      <div className={styles.acru}>
        <div className={styles.contact}>
          <h1>Contact Us</h1>

          <p>
            “Arcu blandit sapien, pulvinar magna lorem in adipiscing tristique.
            Ullamcorper amet sit{" "}
          </p>
          <div>
            <IoMail/>
            <p>officialmail@telidoc.app</p>
          </div>
          <div>
            <BsFillTelephoneFill/>
            <p>+1 (555)000-0000</p>
          </div>
          <div>
            <FaLocationDot/>
            <p>123 Main St, Toronto, ON Canada.</p>
          </div>
        </div>
        <div className={styles.form}>
            <div>
                <label>Email</label>
                <input type="text" placeholder="John Doe"/>
            </div>
             <div>
                <label>Email</label>
                <input type="text" placeholder="samplemail@example.com"/>
            </div>
             <div>
                <label>Email</label>
                <textarea cols={16} rows={8} placeholder="Enter your message here..."></textarea>
            </div>
        </div>
      </div>
    </Cover>
    </div>
  )
}

export default Contact
