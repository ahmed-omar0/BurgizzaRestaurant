import Head from 'next/head';
import styles from "../styles/Login.module.css";
import MainBanel from '../components/Common/MainBanel';
import LogInForm from '../components/LogIn/LogInForm';


const LogIn = () => {
    return (
        <>
            <Head>
                <title>Burgizza  | Log In</title>
            </Head>
            <section className={styles.log_in}>
                <MainBanel 
                    h1Text="Log In" 
                    pText="join us, and order what you like to eat today"
                    bg_url="/login_main_banel.jpg"
                    />
                <LogInForm/>
            </section>
        </>
    );
}
 
export default LogIn;