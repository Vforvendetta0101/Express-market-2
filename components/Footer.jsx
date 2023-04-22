import {UilFacebook, UilGithub,UilInstagram} from "@iconscout/react-unicons"
import css from "../styles/Footer.module.css"
import Logo from '../images/black-logo.png'
import Image from 'next/image'

export default function Footer(){
    return(
        <div className={css.container}>
            <span className={css.footerSpan}>ALL RIGHT RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={45} />
                <UilGithub size={45} />
                <UilInstagram size={45} />
            </div>
            <div className={css.logo}>
                <Image src={Logo} alt="logo" width={150} height={70} />
            </div>
            <span className={css.bottomSpan} color="#000">Creator | V for Vendetta</span>
        </div>
    )
}