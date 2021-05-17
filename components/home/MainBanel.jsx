import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const MainBanel = () => {
    return (
        <section className={ " container " + styles.main_banel}>
            <div className={styles.overlay}></div>
            <h1>Welcome To Burgizza</h1>
            <p>Make Your Special Burger and Pizza</p>
            <div className={styles.btns}>
                <button>
                    <Link href='/customburger'>Custom Burger</Link>
                </button>
                <button>
                    <Link href='/custompizza'>Custom Pizza</Link>
                </button>
            </div>
        </section>
    );
}
 
export default MainBanel;