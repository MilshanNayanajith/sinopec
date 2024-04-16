'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './CreatePump.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  meter: Yup.number().required('Meter is required').positive('Meter must be positive'),
  fuel: Yup.string().required('Fuel is required'),
});

const CreatePump = () => {
    const handleSubmit = async (values:any) => {
        try {
            const res = await fetch('http://localhost:3000/api/pumps',
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values)
            });
            console.log(res)
        } catch (error) {
            
        }
    }
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ name: '', meter: 0, fuel: '' }}
        validationSchema={validationSchema}
        onSubmit={(values,{ resetForm }) => {
          console.log(values);
          handleSubmit(values);
          resetForm();
          
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input input-accent input-md w-full"
                placeholder="Type here"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="meter" className="block text-gray-700">Meter:</label>
              <Field
                type="number"
                id="meter"
                name="meter"
                className="input input-accent input-md w-full"
                placeholder="Type here"
              />
              <ErrorMessage name="meter" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="fuel" className="block text-gray-700">Fuel:</label>
              <Field
                type="text"
                id="fuel"
                name="fuel"
                className="input input-accent input-md w-full"
                placeholder="Type here"
              />
              <ErrorMessage name="fuel" component="div" className="text-red-500" />
            </div>
            <div className="mt-4">
            <button  type="submit"
                disabled={isSubmitting} className="btn btn-outline btn-accent w-full px-4 py-2">{isSubmitting ? 'Creating...' : 'Create Pump'}</button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePump;
