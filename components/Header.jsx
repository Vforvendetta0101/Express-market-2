import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../images/black-logo.png'
import {UilShoppingBag,UilReceipt} from '@iconscout/react-unicons'
import { useStore } from '../store/store'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Header(){
    const [Order,setOrder] = useState("")
    useEffect(()=>{
        setOrder(localStorage.getItem("order"));
    }, [])
    const items = useStore ((state) => state.cart.products.length)
    return(
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt="logo" width={150} height={70} />
            </div>
            {/* menu side */}
            <ul className={css.menu}>
                <li>
                    <Link href='../'>მთავარი</Link>
                </li>
                <li>პროდუქცია</li>
                <li>კონტაქტი</li>
            </ul>
            {/* right side */}

            <div className={css.rightSide}>
                <Link href = '/cart'>
                <div className={css.cart}>
                    <UilShoppingBag width={100} height={50} color="#2E2E2E"/>
                    <div className={css.badge}>{items}</div>
                </div>
                </Link>
                {Order && (
                    <Link href={`/order/${Order}`}>
                        <div className={css.cart}>
                            <UilReceipt width={100} height={50} color='#2E2E2E' />
                            {Order != "" && 
                            <div className={css.badge}>1</div>
                            }
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}