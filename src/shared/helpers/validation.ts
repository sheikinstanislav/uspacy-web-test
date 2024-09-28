import * as yup from 'yup';

const phoneNumberRegEx = /^\+[1-9]\d{1,14}$/;

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required("Це поле обов'язкове"),
  lastName: yup
    .string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required("Це поле обов'язкове"),

  companyName: yup
    .string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required("Це поле обов'язкове"),

  email: yup
    .string()
    .email('Enter a Vaid Email')
    .required("Це поле обов'язкове"),

  phoneNumber: yup
    .string()
    .matches(phoneNumberRegEx, 'Invalid Phone Number')
    .min(5, 'Too Short !')
    .max(15, 'Invalid Phone Number')
    .required("Це поле обов'язкове"),
});
