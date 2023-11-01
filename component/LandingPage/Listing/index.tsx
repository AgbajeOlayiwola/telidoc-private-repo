import PrimaryButton from '@/component/Buttons/PrimaryButton'
import Cover from '@/component/Layout/Cover'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

const Listing = () => {
    const doctors =[
        {
            image:'/Images/docto1.png',
            name:'Dr. Prisca Olivia',
            job:'BEHAVIOURAL THERAPIST'
        },
        {
            image:'/Images/doctor2.png',
            name:'Dr. Ngozi Johnson',
            job:'BEHAVIOURAL THERAPIST'
        },
        {
            image:'/Images/doctor3.png',
            name:'Dr. Jonathan Borba',
            job:'BEHAVIOURAL THERAPIST'
        }
    ]
  return (
    <Cover>
    <div className={styles.lidtd}>
        <div className={styles.therCov}>
            <div className={styles.ther}>
                <div>
                    <p className={styles.lists}>LISTING</p>
                    <h1>Our Therapists</h1>
                    <p>Arcu blandit sapien, pulvinar magna lorem in adipiscing tristique.</p>
                </div>
                <div>
                    <PrimaryButton text={'DISCOVER'}/>
                </div>
            </div>
            <div>
                
                <img src='/Images/mental-therapy.png' width={420} height={420} alt='images'/>
            </div>
        </div>
         <div className={styles.allDocs}>
            {doctors.map((itm, index)=>{
                return (
            <div className={styles.img} key={index}>
                <Image src={itm?.image} width={146} height={162} alt='images'/>
                <div>
                    <h1>{itm?.name}</h1>
                    <div className={styles.profession}>
                        <p>{itm?.job}</p>
                    </div>
                    <Link href='#'>Ask A Question </Link>
                </div>
            </div>
            )
})}
        </div>
    </div>
    </Cover>
  )
}

export default Listing