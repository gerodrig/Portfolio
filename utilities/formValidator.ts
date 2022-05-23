import { FormikErrors } from 'formik';
import Swal from 'sweetalert2';


export interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const validateForm = ({name, email, message }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.trim().length === 0) {
        errors.name = 'Name is required';
    }

    if (email.trim().length === 0) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(String(email).toLowerCase())) { 
        errors.email = 'Email is invalid';
    }

    if (message.trim().length === 0) {
        errors.message = 'Message is required';
    }
    return errors;
}