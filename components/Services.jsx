import Image from 'next/image'
import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services(){

    return(
        <>
        <div className={css.heading}>
            <span>
                რა სერვისები გვაქვს   
            </span>
            <span>
                თქვენი საყვარლეი პროდუქტები
            </span>
            <span>
                მიწოდების სერვისი
            </span>
        </div>
        {/* Features */}
        <div className={css.services}>
            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                <span>
                    მარტივი მიწოდება
                </span>
                <span>
                    სულ რაღაც 5 მარტივი საფეხური და პროდუქტი თქვენს კარებთანაა
                </span>
            </div>
            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                <span>
                    მიწოდების სისწრაფე
                </span>
                <span>
                    სისწრაფე ყველაზე კარგი დამახასიათებელი უნარია მიწოდებისას
                </span>
            </div>
            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                <span>
                    მიწოდების ხარისხი
                </span>
                <span>
                    ხარისხი ნომერ პირველია ნებისმიერ სფეროში.
                </span>
            </div>
        </div>

        </>
    )
}