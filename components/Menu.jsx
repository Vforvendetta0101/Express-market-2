import Image from 'next/image'
import css from '../styles/Menu.module.css'
import { urlFor } from '../lib/client'
import Link from 'next/link'
export default function Menu({products}){
    return(
        <div className={css.container}>
            <div className={css.heading}>
                <span>
                    ჩვენი პროდუქტები
                </span>
                <span>
                    სადაც არის ყველაფერი
                </span>
                <span>
                    რაც გიყვართ და რაც მოგწონთ
                </span>
            </div>
            <div className={css.menu}>
            {/* products */}
                {products.map((product,id)=>{
                    const src = urlFor(product.image).url()
                    return(
                        <div className={css.product} key={id}>

                        <Link href={`./product/${product.slug.current}`}>
                            <div className={css.ImageWrapper}>
                                <Image loader={()=>
                                src} src={src} alt=''
                                objectFit='cover'
                                layout='fill' />
                            </div>
                        </Link>
                            <span>{product.name}</span>
                            <span><span style={{color: 'rgb(243,90,0)'}}>₾</span>{product.price[0]}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}