import styles from '../styles/About.module.css';
// Import Components
import Header from '../components/About/MainBanel';
import Reservations from '../components/Reservations';
import OurStory from '../components/About/OurStory';
import OurTeam from '../components/About/OurTeam';

const About = () => {
    return (
        <section className={styles.about}>
            <Header/>
            <OurStory/>
            <OurTeam/>
            <Reservations/>
        </section>
    );
}
 
export default About;