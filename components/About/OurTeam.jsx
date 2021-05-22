import styles from "../../styles/About.module.css";

const OurTeam = () => {
    return (
        <section className={styles.our_team}>
            <div className={styles.header}>
                <h2>Our Team</h2>
                <p>We have the best cooks</p>
            </div>
            <div className={styles.body}>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img src="/chef1.jpg" alt="chef"/>
                    </div>
                    <div className={styles.card_body}>
                        <h2>Type The Name</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className={styles.card_footer}>
                        <h3>We are honored to serve you</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img src="/chef2.jpg" alt="chef"/>
                    </div>
                    <div className={styles.card_body}>
                        <h2>Type The Name</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className={styles.card_footer}>
                        <h3>We are honored to serve you</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img src="/chef3.jpg" alt="chef"/>
                    </div>
                    <div className={styles.card_body}>
                        <h2>Type The Name</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className={styles.card_footer}>
                        <h3>We are honored to serve you</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_container}>
                        <img src="/chef4.jpg" alt="chef"/>
                    </div>
                    <div className={styles.card_body}>
                        <h2>Type The Name</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className={styles.card_footer}>
                        <h3>We are honored to serve you</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default OurTeam;