import * as yup from 'yup'

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/

export const registerFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Name must be atleast 3 chracter")
        .required('Name is required'),
    email: yup
        .string()
        .email('Enter valid email')
        .required('Email is required'),
    password: yup
        .string().min(5)
        .matches(passwordPattern, 'Minimum 5 characters, at least one uppercase letter, one lowercase letter and one number')
        .required('Password is required'),
    confirmpassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password doesnot match')
        .required("Confirmation is required")
})