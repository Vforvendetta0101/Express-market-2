import {client} from '../../lib/client';
import Layout from '../../components/Layout';
import css from '../../styles/Order.module.css';
import {UilBill,UilBox} from "@iconscout/react-unicons";
import Spinner from '../../assets/spinner.svg'
import Image from 'next/image';
import preparation from '../../assets/cooking.png'
import Onway from '../../assets/Onway.png'
import { useEffect } from 'react';

export const getServerSideProps = async({params}) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await client.fetch(query);

    return {
        props: {
            order: order[0]
        }
    }
}
export default function Orders({order}){
    useEffect(() => {
        if(order.status>3){
            localStorage.clear();
        }
    }, [order])
    return (
        <Layout>
            <div className={css.container}>
                <span className={css.heading}>
                    Order in Process
                </span>
                <div className={css.details}>
                    <div>
                        <span>დამკვეთის ID</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>დამკვეთის სახელი</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>ტელეფონის ნ.</span>
                        <span>{order.phone}</span>
                    </div>
                    <div>
                        <span>მეთოდი</span>
                        <span>
                            {
                                order.method === 0 ? 'კურიერთან გადახდა' : 'ონლაინ გადახდა(Paid)'
                            }
                        </span>
                    </div>
                    <div>
                        <span>სულ გადასახადი</span>
                        <span>₾ {order.total}</span>
                    </div>
                </div>
                <div className={css.statusContainer}>
                    <div className={css.status}>
                        <UilBill width={50} height={50} />
                        <span>გადახდა</span>
                        {order.method === 0 ? (
                            <span className={css.pending}>კურიერთან</span> )
                            :(
                            <span className={css.completed}>შესრულებულია</span>
                            )}
                    </div>
                    <div className={css.status}>
                        <Image className={css.imgstatus} src={preparation} alt='' width={50} height={50} />
                        <span>მზადდება</span>
                        {order.status === 1 && (
                            <div className={css.spinner}>
                                <Image className={css.imgstatus} src={Spinner} alt=''/>
                            </div>
                        )}
                        {order.status > 1 && (
                            <span className={css.completed}>შესრულებულია</span>
                        )}
                    </div>
                    <div className={css.status}>
                        <Image className={css.imgstatus} src={Onway} alt='' width={50} height={50} />
                        <span>გზაშია</span>
                        {order.status === 2 && (
                            <div className={css.spinner}>
                                <Image className={css.imgstatus} src={Spinner} alt=''/>
                            </div>
                        )}
                        {order.status > 2 && (
                            <span className={css.completed}>შესრულებულია</span>
                        )}
                    </div>
                    <div className={css.status}>
                        <UilBox width={50} height={50} />
                        <span>შესრულებულია</span>
                        {order.status === 3 && (
                            <div className={css.spinner}>
                                <Image className={css.imgstatus} src={Spinner} alt=''/>
                            </div>
                        )}
                        {order.status > 3 && (
                            <span className={css.completed}>შესრულებულია</span>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )


};