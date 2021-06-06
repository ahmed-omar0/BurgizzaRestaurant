import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "../../styles/Login.module.css";

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
const onSubmit = values => {
    console.log('Your' + " " + values)
}
const LogInForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}>
            <section className={styles.log_in_form}>
                <div className={styles.header}>
                    <h2>Log-In</h2>
                    <p>Join Us, And Order What You Like To Eat Today</p>
                </div>
                <Form name="log_in" className={styles.body}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <Field
                            type="text" 
                            id="name"
                            name="name"
                            />
                        <ErrorMessage component="div" className={styles.error} name="name"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">email</label>
                        <Field
                            type="email" 
                            id="email"
                            name="email"
                            />
                        <ErrorMessage component="div" className={styles.error} name="email"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="password">password</label>
                        <Field
                            type="text" 
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            />
                        <ErrorMessage component="div" className={styles.error} name="password"/>
                    </div>
                    <button type="submit">Log In</button>
                </Form>
            </section>
        </Formik>
    );
}
 
export default LogInForm;