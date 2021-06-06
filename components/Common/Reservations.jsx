import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

let initialValues = {
    name: '',
    date: '',
    time: '',
    email: '',
    questes: '',
    phone: ''
}
const validate = Yup.object({
    name: Yup.string().matches(/[^0-9][A-z]/gi, 'Invalid Value. It Can Contain Only Characters').required('Name Is Required'),
    date: Yup.string().matches(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/gi, "Ivalid Value. It should look like 2021/01/02").required('Date Is Required'),
    time: Yup.string().matches(/[0-9]{2}:[0-9]{2}/i, 'Invalid Value. It Should Look Like 01:20').required('Time Is Required'),
    email: Yup.string().email('Email Is Invalid').required('Email Is Required'),
    quests: Yup.number().max(20, "It Can't Be More Than 20").min(1, "It Can't Be Less Than 1").required('Num of Quests Is Required'),
    phone:  Yup.string().max(11, "Invalid Value, It's More Than 11 Number").min(11, "Invalid Value, It's Lower Than 11 Number").matches(/[0-9]{11}\[^a-Z]/gi, 'It Can Contain Only Numbers').required('Phone Is Required')
})
const onSubmit = values => {
    console.log('Your' + " " + values)
}
const Reservations = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}>
            <section className="reservations">
                <div className="header">
                    <h2>Reservations</h2>
                    <p>Book a table online. Leads will reach in your email</p>
                </div>
                <Form name="reservations" className="body">
                    <div className="form_control">
                        <label htmlFor="name">Name</label>
                        <Field
                            type="text" 
                            id="name"
                            name="name"
                            />
                        <ErrorMessage component="div" className="error" name="name"/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="date">date</label>
                        <Field
                            type="text" 
                            id="date"
                            name="date"
                            placeholder="YY/MM/DD"
                            />
                        <ErrorMessage component="div" className="error" name="date"/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="time">time</label>
                        <Field
                            type="text" 
                            id="time"
                            name="time"
                            placeholder="00:00"
                            />
                        <ErrorMessage component="div" className="error" name="time"/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="email">email</label>
                        <Field
                            type="email" 
                            id="email"
                            name="email"
                            />
                        <ErrorMessage component="div" className="error" name="email"/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="quests">num of quests</label>
                        <Field
                            type="number" 
                            id="quests"
                            name="quests"
                            />
                        <ErrorMessage component="div" className="error" name="quests"/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="phone">phone</label>
                        <Field
                            type="text" 
                            id="phone"
                            name="phone"
                            placeholder="01018******"
                            />
                        <ErrorMessage component="div" className="error" name="phone"/>
                    </div>
                    <button type="submit">Make Reservation</button>
                </Form>
                <div className="footer">
                    <p>
                        You can also call: <span>+20 1018360530</span> to make a reservation.
                    </p>
                </div>
            </section>
        </Formik>
    );
}
 
export default Reservations;