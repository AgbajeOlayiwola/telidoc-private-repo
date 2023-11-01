import Cover from '@/component/Layout/Cover'
import styles from './styles.module.css'

const Tier = () => {
  return (
    <Cover>
        <div>
            <div className={styles.tier}>
                <h1>Top-tier online therapy, Anytime, Anywhere.</h1>
                <p>Experience the ultimate online therapy journey, thoughtfully designed to be easily accessible from anywhere, ensuring you receive expert care and support wherever you are.</p>
            </div>
        </div>
        <div className={styles.therapists}>
            <div>
                <h1>476</h1>
                <p>Registered therapists</p>
            </div>
            <div>
                <h1>1,254</h1>
                <p>Counsel Connections</p>
            </div>
            <div>
                <h1>641</h1>
                <p>Registered Patients</p>
            </div>
        </div>
    </Cover>
  )
}


export default Tier