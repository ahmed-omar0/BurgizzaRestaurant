import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const MainBanel = () => {
    return (
        <section className={ " container " + styles.main_banel}>
            <div className={styles.overlay}></div>
            <h1>Welcome To Burgizza</h1>
            <p>The Best Burger and Pizza You Will Ever Eat</p>
            <div className={styles.btns}>
                <button>
                    <Link href='/about'>About Us</Link>
                </button>
                <button>
                    <Link href='/menu'>Our Menu</Link>
                </button>
            </div>
        </section>
    );
}
 
export default MainBanel;