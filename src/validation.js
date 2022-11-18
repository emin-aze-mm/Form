import * as yup from 'yup';

let validation = yup.object().shape({
  email: yup.string().email("Maili düzgün yaz").required("Boş qoydun haraya gedirsən!"),
  name: yup.string().required("Boş qoyma!"),
  surname: yup.string().required("Boş qoyma!"),
  comment: yup.string().required("Boş qoyma!"),
});
export default validation