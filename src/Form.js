import React from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";

const formValidation = Yup.object().shape({
    first: Yup.string().required("Please enter a name"),
    last: Yup.string().required("Please enter a lastname"),
    phone: Yup.number(),
    email: Yup.string().email().required("Please enter an valid email adress"),
});


const Form = () => {

    return (
        <div class="wrapper">
            <Formik
                initialValues={{
                    first: "",
                    last: "",
                    company: "",
                    phone: "",
                    email: "",
                    url: ""
                }}
                validationSchema={formValidation}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert("Form successfully submitted");
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        resetForm({})
                    }, 1500)
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit
                }) => {
                    console.log(errors);
                    return (
                        <div className="form-wrapper">
                            <h1>Contact Us</h1>
                            <form onSubmit={handleSubmit}>
                                <div class="firstName">
                                    <label for="first">First Name</label>
                                    <input
                                        type="text"
                                        value={values.first}
                                        onChange={handleChange}
                                        class="form-control"
                                        placeholder=""
                                        id="first" />
                                </div>
                                <div class="lastName">
                                    <label for="last">Last Name</label>
                                    <input
                                        type="text"
                                        value={values.last}
                                        onChange={handleChange}
                                        class="form-control"
                                        placeholder=""
                                        id="last" />
                                </div>

                                <div class="company">
                                    <label for="company">Company</label>
                                    <input
                                        type="text"
                                        value={values.company}
                                        onChange={handleChange}
                                        class="form-control"
                                        placeholder=""
                                        id="company" />
                                </div>
                                <div class="phone">
                                    <label for="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={values.phone}
                                        onChange={handleChange}
                                        class="form-control"
                                        id="phone"
                                        placeholder="phone" />
                                </div>

                                <div class="email">
                                    <label for="email">Email address</label>
                                    <input
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        class="form-control"
                                        id="email"
                                        placeholder="email" />
                                </div>

                                <div class="url">
                                    <label for="url">Your Website <small>Please include http://</small></label>
                                    <input
                                        type="url"
                                        value={values.url}
                                        onChange={handleChange}
                                        class="form-control"
                                        id="url"
                                        placeholder="url" />
                                </div>

                                <div className="preference">
                                    <label for="contact-preference">When is the best time of day to reach you?</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" onChange={handleChange} name="contact-preference" id="contact-preference" value="am" checked />Morning
                                </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" onChange={handleChange} name="contact-preference" id="contact-preference" value="pm" />Evening
                                </label>
                                    </div>
                                </div>

                                <div className="newsletter">
                                    <label for="newsletter">Would you like to recieve our email newsletter?</label>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" onChange={handleChange} value="Sure!" id="newsletter" /> Sure!
                                        </label>
                                    </div>
                                </div>
                                <div className="submitForm">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                    );
                }}

            </Formik>
        </div>
    );
};

export default Form;