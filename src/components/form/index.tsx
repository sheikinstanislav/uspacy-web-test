import { useFormik } from 'formik';
import { validationSchema } from '~/shared/helpers';
import { Button, CustomCheckbox, CustomInput } from '~/shared/ui';
import { styles } from './styles';
import { FC } from 'react';

interface FormProps {
  formTitle?: JSX.Element;
}

export const Form: FC<FormProps> = ({ formTitle }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      message: '',
      policy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted with values:', values);
      resetForm();
    },
  });

  return (
    <div id="contact-form">
      {formTitle && <div css={styles.heading}>{formTitle}</div>}
      <form css={styles.form} onSubmit={formik.handleSubmit}>
        <CustomInput
          id="firstName"
          name="firstName"
          label="Ім'я"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          required
        />
        <CustomInput
          id="lastName"
          name="lastName"
          label="Прізвище"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          required
        />
        <CustomInput
          id="companyName"
          name="companyName"
          label="Компанія"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          helperText={formik.touched.companyName && formik.errors.companyName}
          required
        />
        <CustomInput
          id="phoneNumber"
          name="phoneNumber"
          label="Номер мобільного телефону"
          type="phone"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          required
        />
        <CustomInput
          id="email"
          name="email"
          type="email"
          label="Адреса електронної пошти"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          autoComplete="email"
          required
        />
        <CustomInput
          id="message"
          name="message"
          label="Ваше запитання"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <CustomCheckbox
          name="policy"
          id="policy"
          checked={formik.values.policy}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label={
            <p>
              Реєструючись, я повністю погоджуюся з{' '}
              <a href="#">Політикою конфіденційності Uspacy</a>
            </p>
          }
        />

        <Button
          variant="primary"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
          css={styles.submitButton}
        >
          Зареєструватися
        </Button>
      </form>
    </div>
  );
};
