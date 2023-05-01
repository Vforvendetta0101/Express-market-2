import { useStore } from "../store/store";
import Layout from "../components/Layout";
import css from "../styles/Cart.module.css"
import Image from "next/image";
import { urlFor } from "../lib/client";
import toast,{ Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function Cart () {
    const CartData = useStore((state) => state.cart);
    const  removeProduct = useStore((state)=> state.removeProduct);
    const [PaymentMethod, setPaymentMethod] = useState(null)

    const handleRemove = (i) => {
        removeProduct(i);
        toast.error("პროდუქტი წაიშალა");
    };

    const total = () => CartData.products.reduce((a,b)=>a+b.quantity * b.price, 0)

    // Pay on Delivery

    const handleOnDelivery = () => {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', total())
    }
    return(
        <Layout>
            <div className={css.container}>
                {/* details */}
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>პროდუქტი</th>
                            <th>სახელი</th>
                            <th>ზომა</th>
                            <th>ფასი</th>
                            <th>რაოდენობა</th>
                            <th>სულ</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.products.length > 0 &&
                            CartData.products.map((product, i) =>{
                                const src = urlFor(product.image).url();
                                return(
                                <tr key={i}>
                                    <td className={css.imageTd}>
                                        <Image 
                                        src={src}
                                        loader={()=> src}
                                        alt=""
                                        objectFit="cover"
                                        width={85}
                                        height={85}
                                        />
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {
                                            product.size === 0 ?
                                            "პატარა" :
                                            product.size === 1 ?
                                            "საშუალო" :
                                            "დიდი"
                                        } 
                                    </td>
                                    <td>
                                       {product.price} 
                                    </td>
                                    <td>
                                        {product.quantity}
                                    </td>
                                    <td>
                                        {product.price * product.quantity}
                                    </td>
                                    <td onClick={()=>handleRemove(i)} style={{color: 'rgb(243,90,0)',cursor: "pointer"}}>x</td>
                                </tr>
                            )})
                            }
                        </tbody>
                    </table>
                </div>
                {/* summary */}
                <div className={css.cart}>
                    <span>კალათა</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>პროდუქტები</span>
                            <span>
                                {CartData.products.length}
                            </span>
                        </div>
                        <div>
                            <span>სულ</span>
                            <span>₾ {total()}</span>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        <button className="btn" onClick={handleOnDelivery}>კურიერთან გადახდა</button>
                        <button className="btn">გადახდა ახლა</button>
                    </div>
                </div>
            </div>
            <Toaster />

            {/* Modal */}

            <OrderModal
            opened = {PaymentMethod === 0}
            setOpened = {setPaymentMethod}
            PaymentMethod = {PaymentMethod}
            />
        </Layout>
    )
}