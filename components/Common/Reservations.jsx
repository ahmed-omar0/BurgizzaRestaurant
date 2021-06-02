import {useFormik} from 'formik';
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
    name: Yup.string().matches(/[A-z]/gi, 'Invalid Value. It Can Contain Only Characters').required('Name Is Required'),
    date: Yup.string().matches(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/gi, "Ivalid Value. It should look like 2021/01/02").required('Date Is Required'),
    time: Yup.string().matches(/[0-9]{2}:[0-9]{2}/i, 'Invalid Value. It Should Look Like 01:20').required('Time Is Required'),
    email: Yup.string().email('Email Is Invalid').required('Email Is Required'),
    quests: Yup.number().max(20, "It Can't Be More Than 20").min(1, "It Can't Be Less Than 1").required('Num of Quests Is Required'),
    phone:  Yup.string().max(11, "Invalid Value, It's More Than 11 Number").matches(/[0-9]{11}\[^a-Z]/gi, 'It Can Contain Only Numbers').required('Phone Is Required')
})
const Reservations = () => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log('Your' + " " + values)
        },
        validationSchema: validate
    })
    return (
        <section className="reservations">
            <div className="header">
                <h2>Reservations</h2>
                <p>Book a table online. Leads will reach in your email</p>
            </div>
            <form name="reservations" className="body" onSubmit={formik.handleSubmit}>
                <div className="form_control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        />
                    {
                        formik.touched.name && formik.errors.name ? 
                        (
                            <div className="error">{formik.errors.name}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="date">date</label>
                    <input
                        type="text" 
                        id="date"
                        name="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        placeholder="YY/MM/DD"
                        />
                    {
                        formik.touched.date && formik.errors.date ? 
                        (
                            <div className="error">{formik.errors.date}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="time">time</label>
                    <input
                        type="text" 
                        id="time"
                        name="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                        placeholder="00:00"
                        />
                    {
                        formik.touched.time && formik.errors.time ? 
                        (
                            <div className="error">{formik.errors.time}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="email">email</label>
                    <input
                        type="email" 
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                    {
                        formik.touched.email && formik.errors.email ? 
                        (
                            <div className="error">{formik.errors.email}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="quests">num of quests</label>
                    <input
                        type="number" 
                        id="quests"
                        name="quests"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.quests}
                        />
                    {
                        formik.touched.quests && formik.errors.quests ? 
                        (
                            <div className="error">{formik.errors.quests}</div>
                        ) : null
                    }
                </div>
                <div className="form_control">
                    <label htmlFor="phone">phone</label>
                    <input
                        type="text" 
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder="01018******"
                        />
                    {
                        formik.touched.phone && formik.errors.phone ? 
                        (
                            <div className="error">{formik.errors.phone}</div>
                        ) : null
                    }
                </div>
                <button type="submit">Make Reservation</button>
            </form>
            <div className="footer">
                <p>
                    You can also call: <span>+20 1018360530</span> to make a reservation.
                </p>
            </div>
        </section>
    );
}
 
export default Reservations;