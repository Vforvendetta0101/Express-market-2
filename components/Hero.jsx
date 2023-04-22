import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../images/1-image.png'
import {UilPhone} from '@iconscout/react-unicons'
import Product1 from '../images/eleqtro-1.png'
export default function Hero(){
    return(
        <div className={css.container}>
           {/* left side */}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt="" width={40} height={25} />
                </div>
                <div className={css.heroText}>
                    <span>
                        ყველაზე სწრაფი 
                    </span>
                    <span>
                         გამოძახებების სერვისებს შორის
                    </span>
                    <span>
                        მიიღე ყველაზე სწრაფად შენი <span className={css.boldText} style={{color: "rgba(243, 89, 0, 0.708)"}}>პროდუქტი</span>
                    </span>
                </div>
                <span className={css.miniText}>
                    ჩვენ და ზოგადად ყველა მარკეტის ქსელი
                    ვალდებული არის მომხმარებლის ყველა მოთხოვნა დაკმაყოფილდეს
                    ჩვენ ამ ვალდებულებებს წარმატებით ვასრულებთ
                </span>
                <button className={`btn ${css.btn}`}>
                    დაიწყეთ
                </button>
            </div>
           {/* right side */}
           <div className={css.rightSide}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt='' layout='intrinsic' />
                </div>
                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color="white" />
                    </div>
                </div>
                <div className={css.Product}>
                    <div>
                        <Image src={Product1} alt="" objectFit='cover' layout='intrinsic' />
                    </div>
                    <div className={css.details}>
                        <span>ელექტრო სიგარეტი</span>
                        <span>მრავალფეროვანი კოლექცია</span>
                        <span><span style={{color: "rgb(243,90,0)"}}>₾</span> 25</span>
                    </div>
                </div>
           </div>
        </div>
    )
}