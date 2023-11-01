import PrimaryButton from '@/component/Buttons/PrimaryButton'
import Cover from '@/component/Layout/Cover'
import Image from 'next/image'
import styles from './styles.module.css'
const Experts = () => {
  return (
    <div className={styles.cover}>
        <Cover>
            <div className={styles.coun}>
                <div  className={styles.counsel}>
                    <h1>Experts counsel.</h1>
                    <p>Telidoc suggests therapists tailored to your needs by analyzing your responses to a set of concise questions.</p>
                    <PrimaryButton text='CONNECT WITH A THERAPIST TODAY'/>
                </div>
                <Image src='/Images/Rectangle.png' width={794} height={396} alt=''/>
            </div>
        </Cover>
    </div>
  )
}

export default Experts