import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import classNames from 'classnames';

import { fadeInUp, routeAnimation, stagger } from '../../../animations';


import { validateForm } from '../../../utilities/formValidator';

export const ContactForm = () => {

    const { theme } = useTheme();
    const [themeMode, setThemeMode] = useState('#60a5fa');

    useEffect(() => {
        if (theme !== 'dark') {
            setThemeMode('#60a5fa');
        } else {
            setThemeMode('#0d0d0f');
        }
    }, [theme]);


    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: validateForm,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.status === 200) {
                    Swal.fire({
                        text: 'Your message has been sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: themeMode,
                    });

                    resetForm();
                }
            } catch (error) {
                return Swal.fire({
                    text: 'Something went wrong!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: themeMode,
                });
            }
        },
    });
    return (
        <motion.div
                    className="py-1 mx-2 my-1 dark:bg-dark-veryLight dark:rounded-xl"
                    variants={routeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit">
                    <motion.form
                        className="grid grid-cols-12 mx-4 my-6 gap-x-2 gap-y-4"
                        onSubmit={handleSubmit}
                        variants={stagger}
                        initial="initial"
                        animate="animate">
                        <motion.input
                            id="name"
                            name="name"
                            type="text"
                            className={classNames(
                                'col-span-6 p-1 border-2 border-solid focus:border-blue-secondary focus:outline-none focus:ring-1 focus:ring-blue-secondary dark:focus:border-blue-secondary',
                                touched.name && errors.name
                                    ? 'border-red-400'
                                    : 'border-blue-primary dark:border-white ',
                                touched.name && errors.name
                                    ? 'placeholder-red-400'
                                    : null
                            )}
                            onChange={handleChange}
                            value={values.name}
                            placeholder={
                                touched.name && errors.name
                                    ? errors.name
                                    : 'Gerardo Rodriguez'
                            }
                            variants={fadeInUp}
                        />
                        <motion.input
                            id="email"
                            name="email"
                            type="email"
                            className={classNames(
                                'col-span-6 p-1 border-2 border-solid focus:border-blue-secondary focus:outline-none focus:ring-1 focus:ring-blue-secondary dark:focus:border-blue-secondary',
                                touched.email && errors.email
                                    ? 'border-red-400'
                                    : 'border-blue-primary dark:border-white ',
                                touched.email && errors.email
                                    ? 'placeholder-red-400'
                                    : null
                            )}
                            onChange={handleChange}
                            value={values.email}
                            placeholder={
                                touched.email && errors.email
                                    ? errors.email
                                    : 'garc@outlook.com'
                            }
                            variants={fadeInUp}
                        />

                        <motion.textarea
                            id="message"
                            name="message"
                            className={classNames(
                                'h-48 col-span-12 p-2 border-2 border-solid focus:border-blue-secondary focus:outline-none focus:ring-1 focus:ring-blue-secondary dark:focus:ring-2 dark:focus:border-blue-secondary',
                                touched.message && errors.message
                                    ? 'border-red-400'
                                    : 'border-blue-primary dark:border-white ',
                                touched.message && errors.message
                                    ? 'placeholder-red-400'
                                    : null
                            )}
                            onChange={handleChange}
                            value={values.message}
                            placeholder={
                                touched.message && errors.message
                                    ? errors.message
                                    : 'Hey Gerardo,'
                            }
                            variants={fadeInUp}
                        />
                        <button
                            className="col-span-12 py-1 text-white duration-300 ease-in bg-blue-400 rounded-full dark:bg-dark-secondary hover:animate-pulse hover:font-bold hover:scale-105"
                            type="submit">
                            Send
                        </button>
                    </motion.form>
                </motion.div>
    )
}
