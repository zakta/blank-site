// 3rd parties
import { useFormik } from 'formik';

// styles

import {
  Container, BtnSubmit, Form, Inputform, Textarea,
} from './styles';
import Validation from './validation';

const FormContact = function Formpage() {
  const formik = useFormik(Validation);

  return (
    <Container>
      <h2>Contato</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Inputform
          name="name"
          type="text"
          placeholder="Nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
          readOnly={formik.isSubmitting}
          maxLength={100}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="errorMsg">{formik.errors.name}</div>
        )}
        <Inputform
          name="phone"
          type="text"
          placeholder="Telefone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          error={formik.errors.phone}
          touched={formik.touched.phone}
          readOnly={formik.isSubmitting}
          mask="(99) 99999-9999"
          maxLength={16}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="errorMsg">{formik.errors.phone}</div>
        )}
        <Inputform
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          readOnly={formik.isSubmitting}
          maxLength={100}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="errorMsg">{formik.errors.email}</div>
        )}
        <Textarea
          name="message"
          type="submit"
          placeholder="Mensagem"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          error={formik.errors.message}
          touched={formik.touched.message}
          readOnly={formik.isSubmitting}
          maxLength={300}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="errorMsg">{formik.errors.message}</div>
        )}
        <BtnSubmit
          disabled={formik.isSubmitting}
          type="submit"
        >
          Enviar Mensagem
        </BtnSubmit>
      </Form>
    </Container>
  );
};
export default FormContact;
