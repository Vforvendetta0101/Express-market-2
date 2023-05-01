import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from '../../styles/Product.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, {Toaster} from 'react-hot-toast';

export default function Product({product}){
    const src = urlFor(product.image).url();
    const [Quantity,setQuantity] = useState(1)
    const [Size, setSize] = useState(1);
    // handle Quantity
    const handleQuan = (type) => {
        type === "inc" ? setQuantity((prev) => prev + 1) 
        : Quantity === 1
        ? null
        : setQuantity((prev) => prev - 1);
    }

    //add to cart function

    const addProduct =  useStore((state) => state.addProduct)
    const addToCart = () => {
        addProduct({...product,price: product.price[Size],quantity: Quantity, size: Size})
        toast.success("Added To cart")
    }
    return(<Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image
                    loader={() => src}
                    alt=""
                    src={src} layout="fill" unoptimized objectFit="cover"
                    />
                </div>
            {/* right side */}
            <div className={css.right}>
                <span>{product.name}</span>
                <span>{product.details}</span>
                <span><span style={{color: "rgb(243,90,0}"}}>₾</span> {product.price[Size]}</span>
                <span></span>
                <div className={css.size}>
                    <span>ზომა:</span>
                    <div className={css.SizeVariants}>
                        <div onClick={()=> setSize(0)}
                        className={Size === 0 ? css.selected : ""}
                        >პატარა</div>
                        <div onClick={()=> setSize(1)}
                        className={Size === 1 ? css.selected : ""}
                        >საშუალო</div>
                        <div onClick={()=> setSize(2)}
                        className={Size === 2 ? css.selected : ""}
                        >დიდი</div>
                    </div>
                </div>
            {/* Quantity counter */}
                    <div className={css.quantity}>
                        <span>რაოდენობა</span>
                        <div className={css.counter}>
                            <Image
                            className={css.changeImgColor}
                            src={LeftArrow}
                            height={20}
                            width={20}
                            alt=""
                            objectFit="contain"
                            onClick={()=>handleQuan("dec")}
                            />
                            <span>{Quantity}</span>
                            <Image
                            className={css.changeImgColor}
                            src={RightArrow}
                            height={20}
                            width={20}
                            alt=""
                            objectFit="contain"
                            onClick={()=>handleQuan("inc")}
                            />
                        </div>
                    </div>
                    {/* button */}
                    <div className={`btn ${css.btn}`} onClick={addToCart}>
                        კალათაში დამატება
                    </div>
                </div>
                <Toaster />
            </div>
        </Layout>)
}

export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type =="product" && defined(slug.current)][].slug.current`
    );
    return{
        paths: paths.map((slug)=> ({params: {slug}})),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const{slug=""} = context.params;
    const product = await client.fetch(
        `*[_type=="product" && slug.current == '${slug}'][0]`
    );
    return {
        props: {
            product,
        },
    };
}