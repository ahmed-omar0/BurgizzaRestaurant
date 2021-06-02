import Head from 'next/head';
import styles from '../styles/Menu.module.css';
// Import Components
import MainBanel from '../components/Common/MainBanel';
import BurgizzaMenu from '../components/Menu/BurgizzaMenu';
import Reservations from '../components/Common/Reservations';

const Menu = () => {
    return (
        <>
            <Head>
                <title>Burgizza  | Our Menu</title>
            </Head>
            <section className={styles.menu}>
                <MainBanel 
                    h1Text="Our Menu" 
                    pText="We have the best burger and pizza in the whole world, You must try them"
                    bg_url='/menu_main_banel.png'
                    />
                <BurgizzaMenu/>
                <Reservations/>
            </section>
        </>
    );
}
 
export default Menu;