import Head from 'next/head';
import styles from '../styles/Checkout.module.css';
import MainBanel from '../components/Common/MainBanel';
import CheckOutTable from '../components/checkout/CheckOutTable';

const CheckOut = () => {
    return (
        <>
            <Head>
                <title>Burgizza  | Check Out</title>
            </Head>
            <section className={styles.checkout}>
                <MainBanel 
                    h1Text="Check Out" 
                    pText="We Hope You Enjoy Our Services"
                    bg_url="/checkout_main_banel.jpg"/>
                <CheckOutTable/>
            </section>
        </>
    );
}
 
export default CheckOut;