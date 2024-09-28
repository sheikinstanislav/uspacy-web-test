import { useFormik } from 'formik';
import { validationSchema } from '~/shared/helpers';
import { Button, CustomCheckbox, CustomInput } from '~/shared/ui';
import { styles } from './styles';

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      policy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });

  console.log('Formik Errors:', formik.errors);

  return (
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
        error={formik.touched.companyName && Boolean(formik.errors.companyName)}
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
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        required
      />
      <CustomInput
        id="email"
        name="email"
        label="Адреса електронної пошти"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        required
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

      <Button variant="primary" type="submit">
        Зареєструватися
      </Button>
    </form>
  );
};
