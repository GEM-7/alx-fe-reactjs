import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./../App.css"

const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
});

const FormikForm = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form submitted:", values);
        alert(`User registered: ${values.username}`);
        resetForm();
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Register with Formik</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <Field type="text" id="username" name="username" />
                            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
                        </div>

                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikForm;
