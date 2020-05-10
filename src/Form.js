import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const phoneRegExp = RegExp(
  /^[+]*[0-9]*[ ]{0,1}[(]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[)]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[0-9]{2}[ ]{0,1}[0-9]{2}[ ]{0,1}[-\.\/]{0,1}[ ]{0,1}[0-9]{1,5}$/g
);

const formValidation = Yup.object().shape({
  first: Yup.string().required("Please enter a name"),
  last: Yup.string().required("Please enter a last name"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid."),
  email: Yup.string()
    .email("Email adress is not valid")
    .required("Please enter an email adress"),
  url: Yup.string().url("URL is not valid"),
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
          url: "",
          time: "am",
          newsletter: false,
        }}
        validationSchema={formValidation}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          alert("Form successfully submitted");
          alert(JSON.stringify(values, null, 2));
          resetForm({});
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          console.log(errors);
          return (
            <div className="form-wrapper">
              <h1>Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <div class="form-field firstName">
                  <label for="first">First Name</label>
                  <input
                    className={errors.first ? "error" : null}
                    type="text"
                    placeholder="First Name"
                    value={values.first}
                    onChange={handleChange}
                    class="form-control"
                    id="first"
                  />
                  {errors.first && (
                    <span className="errorMessage">{errors.first}</span>
                  )}
                </div>
                <div class="form-field lastName">
                  <label for="last">Last Name</label>
                  <input
                    className={errors.last ? "error" : null}
                    placeholder="Last Name"
                    type="text"
                    value={values.last}
                    onChange={handleChange}
                    class="form-control"
                    id="last"
                  />
                  {errors.last && (
                    <span className="errorMessage">{errors.last}</span>
                  )}
                </div>

                <div class="form-field  company">
                  <label for="company">Company</label>
                  <input
                    type="text"
                    value={values.company}
                    onChange={handleChange}
                    class="form-control"
                    placeholder="Company"
                    id="company"
                  />
                </div>
                <div class="form-field phone">
                  <label for="phone">Phone Number</label>
                  <input
                    className={errors.phone ? "error" : null}
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    class="form-control"
                    id="phone"
                    placeholder="+90 (xxx) xxx xx xx"
                  />
                  {errors.phone && (
                    <span className="errorMessage">{errors.phone}</span>
                  )}
                </div>

                <div class="form-field  email">
                  <label for="email">Email address</label>
                  <input
                    className={errors.email ? "error" : null}
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="errorMessage">{errors.email}</span>
                  )}
                </div>

                <div class="form-field  url">
                  <label for="url">
                    Your Website <small>Please include http://</small>
                  </label>
                  <input
                    type="url"
                    value={values.url}
                    onChange={handleChange}
                    class="form-control"
                    id="url"
                    placeholder="Url"
                  />
                  {errors.url && (
                    <span className="errorMessage">{errors.url}</span>
                  )}
                </div>

                <div className="preference">
                  <label for="contact-preference">
                    When is the best time of day to reach you?
                  </label>
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        onChange={handleChange}
                        name="time"
                        id="am"
                        value="am"
                        checked={values.time === "am"}
                      />
                      Morning
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        onChange={handleChange}
                        name="time"
                        id="pm"
                        value="pm"
                        checked={values.time === "pm"}
                      />
                      Evening
                    </label>
                  </div>
                </div>

                <div className="newsletter">
                  <label for="newsletter">
                    Would you like to recieve our email newsletter?
                  </label>
                  <div class="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        onChange={handleChange}
                        value="true"
                        id="newsletter"
                        checked={values.newsletter}
                      />
                      Sure!
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
