import styles from "../../styles/About.module.css";

const MainBanel = () => {
    return (
        <section className={styles.main_banel}>
            <div className={styles.overlay}></div>
            <h1>About Us</h1>
            <p>Read our Story, How we started and about the Team</p>
        </section>
    );
}
 
export default MainBanel;