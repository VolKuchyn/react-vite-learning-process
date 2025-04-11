import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { setFields } from '../../redux/form-reducer'
import s from './FormPage.module.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const FormPage = () => {
    const dispatch = useDispatch();

    const handleImageUpload = (e, values, setFieldValue) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
          id: `${file.name}-${Date.now()}`,
          url: URL.createObjectURL(file),
          file,
        }));
        setFieldValue("images", [...values.images, ...newImages]);
      };
    
      const handleDragEnd = (result, values, setFieldValue) => {
        if (!result.destination) return;
        const reordered = Array.from(values.images);
        const [moved] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, moved);
        setFieldValue("images", reordered);
      };

    return (
        <div>
            <Formik
                initialValues={
                    {
                        email: '',
                        password: '',
                        images: [],
                    }
                }
                onSubmit={(values) => { dispatch(setFields(values)) }}>

                <Form>
                    <div className={s.form}>
                        <label htmlFor='email'>E-mail: </label>
                        <Field id='email' name='email' placeholder="Your e-mail" type="email" />
                    </div>


                    <div className={s.form}>
                        <label htmlFor='password'>Password: </label>
                        <Field id='password' name='password' placeholder="Your password" type="password" />
                    </div>

                    <div className={s.form}>
                        <label htmlFor="images">Upload images:</label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleImageUpload(e, values, setFieldValue)}
                        />
                    </div>

                    <button type="submit">Submit</button>

                </Form>

            </Formik>
        </div>
    )
}

export default FormPage;