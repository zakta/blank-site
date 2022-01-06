import * as Yup from 'yup';

export default {
  initialValues: {
    name: '',
    phone: '',
    email: '',
    message: '',
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .min(3, 'Mínimo 3 caracteres')
      .max(100, 'Máximo 100 cacteres')
      .required('Preencha o nome'),
    phone: Yup.string()
      .min(15, 'No mínimo 11 números')
      .max(16, 'Máximo 16 números')
      .required('Preencha o número'),
    email: Yup.string()
      .email('E-mail inválido')
      .max(100, 'Máximo 100 caracteres')
      .required('Preencha e-mail'),
    message: Yup.string()
      .max(300, 'Máximo 300 caracteres')
      .required('Preencha a mensagem'),
  }),
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
};
