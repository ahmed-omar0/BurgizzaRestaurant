import { useFormik } from 'formik';
import styles from "../../styles/Login.module.css";
import * as Yup from 'yup';

let initialValues = {
    name: '',
    email: '',
    password: ''
}
const validate = Yup.object({
    name: Yup.string().matches(/[^0-9]\[A-z]/gi, 'Invalid Value. It Can Contain Only Characters').required('Name Is Required'),
    email: Yup.string().email('Email Is Invalid').required('Email Is Required'),
    password: Yup.string().required('Password Is Required')
})
const LogInForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log('Your' + " " + values)
        },
        validationSchema: validate
    })
    return (
        <section className={styles.log_in_form}>
            <div className={styles.header}>
                <h2>Log-In</h2>
                <p>Join Us, And Order What You Like To Eat Today</p>
            </div>
            <form name="log_in" className={styles.body} onSubmit={formik.handleSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        id="name"
                        name="name"
                        {...formik.getFieldProps('name')}
                        />
                    {
                        formik.touched.name && formik.errors.name ? 
                        (
                            <div className={styles.error}>{formik.errors.name}</div>
                        ) : null
                    }
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">email</label>
                    <input
                        type="email" 
                        id="email"
                        name="email"
                        {...formik.getFieldProps('email')}
                        />
                    {
                        formik.touched.email && formik.errors.email ? 
                        (
                            <div className={styles.error}>{formik.errors.email}</div>
                        ) : null
                    }
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="password">password</label>
                    <input
                        type="text" 
                        id="password"
                        name="password"
                        {...formik.getFieldProps('password')}
                        placeholder="Your Password"
                        />
                    {
                        formik.touched.password && formik.errors.password ? 
                        (
                            <div className={styles.error}>{formik.errors.password}</div>
                        ) : null
                    }
                </div>
                <button type="submit">Log In</button>
            </form>
        </section>
    );
}
 
export default LogInForm;