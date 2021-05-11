/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const CustomerSignUp = yup.object().shape({
  firstName: yup.string()
    .required('First name is required')
    .matches(/^[a-zA-Z]+$/, 'Must use letters only')
    .min(2, 'Must be at least 2 characters'),
  lastName: yup.string()
    .required('Last name is required')
    .matches(/^[a-zA-Z]+$/, 'Must use letters only')
    .min(2, 'Must be at least 2 characters'),
  email: yup.string()
    .required('Email is required')
    .email('Email must be valid'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'Must include one uppercase, one lowercase, one number, one special character'),
  confirmPassword: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  street: yup.string()
    .required('Street is required'),
  city: yup.string()
    .required('City is required'),
  state: yup.string()
    .required('State required'),
  phoneNumber: yup.string()
    .required('Phone number is required')
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Phone number must be valid'),
  zipCode: yup.string()
    .required('Zip Code is required')
    .matches(/^(?!0{3})[0-9]{5}(?:-[0-9]{4})?$/, 'Zip Code must be valid')
});

export const LoginValidation = yup.object().shape({
  email: yup.string()
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
});
