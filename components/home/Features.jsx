import styles from '../../styles/Home.module.css';

const Features = () => {
    return (
        <section class={styles.features}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    Our Features
                </h2>
                <p>Little things make us best in country</p>
            </div>
            <div className={styles.cards}>
                <div class={styles.features_card}>
                    <div class={styles.features_img}>
                        <img src="/thumb1.jpg" alt=""/>
                    </div>
                    <div class={styles.features_card_content}>
                        <div class={styles.page_header}>
                            <h1>Serving with love</h1>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div class={styles.features_card}>
                    <div class={styles.features_img}>
                        <img src="thumb2.jpg" alt=""/>
                    </div>
                    <div class={styles.features_card_content}>
                        <div class={styles.page_header}>
                            <h1>Serving with love</h1>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div class={styles.features_card}>
                    <div class={styles.features_img}>
                        <img src="thumb3.jpg" alt=""/>
                    </div>
                    <div class={styles.features_card_content}>
                        <div class={styles.page_header}>
                            <h1>Serving with love</h1>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;