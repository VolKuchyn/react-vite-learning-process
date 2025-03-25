import React from "react";
import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { setFields } from '../../redux/form-reducer'
import s from './FormPage.module.css';

const FormPage = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={
                    {
                        name: '',
                        email: '',
                        password: ''
                    }
                }
                onSubmit={(values) => { dispatch(setFields(values)) }}>

                <Form>
                    <div className={s.form}>
                        <label htmlFor="name">Name: </label>
                        <Field id='name' name='name' placeholder='Your name' />
                    </div>


                    <div className={s.form}>
                        <label htmlFor='email'>E-mail: </label>
                        <Field id='email' name='email' placeholder="Your e-mail" type="email" />
                    </div>


                    <div className={s.form}>
                        <label htmlFor='password'>Password: </label>
                        <Field id='password' name='password' placeholder="Your password" type="password" />
                    </div>


                    <button type="submit">Submit</button>

                </Form>

            </Formik>
        </div>
    )
}

export default FormPage;