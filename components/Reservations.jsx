import {useFormik} from 'formik';

let initialValues = {
    name: '',
    date: '',
    time: '',
    email: '',
    questes: '',
    phone: ''
}
const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name = "Required"
    }else if(!/[A-z]/gi.test(values.name)){
        errors.name = "Invalid Value. It Can Contain Only Characters"
    }

    if(!values.date){
        errors.date = "Required"
    }else if(!/[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/gi.test(values.date)){
        errors.date = "Ivalid Value. It should look like 2021/12/20"
    }

    if(!values.time){
        errors.time = "Required"
    }else if(!/[0-9:]{5}/i.test(values.time) 
            || values.time.length > 5  
            || !(values.time.indexOf(':') === 2)){
        errors.time = "Invalid Value. It Should Look Like 01:20"
    }

    if(!values.email){
        errors.email = "Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid Value"
    }

    if(!values.quests){
        errors.quests = "Required"
    }else if(!/[0-9]{1,2}/gi.test(values.quests) || parseInt(values.quests) > 20) {
        errors.quests = "Invalid Value. It Must Contain Only Numbers And It Can't Be More Than 20"
    }

    if(!values.phone){
        errors.phone = "Required"
    }else if (!/[0-9]{11}/gi.test(values.phone) || values.phone.length > 11){
        errors.phone = "Invalid Value. It Must Contain Only Numbers And length Is 11"
    }
    return errors
}

const Reservations = () => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log('Your' + " " + values)
        },
        validate
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
                        type="text" 
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