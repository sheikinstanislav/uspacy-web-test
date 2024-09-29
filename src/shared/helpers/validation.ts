import * as yup from 'yup';

const phoneNumberRegEx = /^\+[1-9]\d{1,14}$/;

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Занадто коротке!')
    .max(30, 'Занадто довге!')
    .required("Це поле обов'язкове"),
  lastName: yup
    .string()
    .min(3, 'Занадто коротке!')
    .max(30, 'Занадто довге!')
    .required("Це поле обов'язкове"),

  companyName: yup
    .string()
    .min(3, 'Занадто коротке!')
    .max(30, 'Занадто довге!')
    .required("Це поле обов'язкове"),

  email: yup
    .string()
    .email('Введіть дійсну електронну адресу')
    .required("Це поле обов'язкове"),

  phoneNumber: yup
    .string()
    .matches(phoneNumberRegEx, 'Невірний номер телефону')
    .min(5, 'Занадто короткий!')
    .max(15, 'Невірний номер телефону')
    .required("Це поле обов'язкове"),
});
