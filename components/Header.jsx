import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../images/black-logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
export default function Header(){
    return(
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt="logo" width={150} height={70} />
            </div>
            {/* menu side */}
            <ul className={css.menu}>
                <li>მთავარი</li>
                <li>პროდუქცია</li>
                <li>კონტაქტი</li>
            </ul>
            {/* right side */}

            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag width={100} height={50} color="#2E2E2E"/>
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )
}