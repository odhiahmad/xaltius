import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setToken } from "utils/cookie";
import Input from "app/components/formik/input/loadable";
import Select from "app/components/formik/select/loadable";
import Button from "app/components/formik/button/loadable";
import Radio from "app/components/formik/radio/loadable";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Format email salah")
    .required("Email tidak boleh kosong"),
  password: Yup.string().required("Password tidak boleh kosong"),
});

export function FormLogin() {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      setLoading(true);
      alert("Berhasil login " + values.email);
      setLoading(false);
    } catch (error) {
      // setToken("test");
      setLoading(false);
    }
  };
  // FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <Input
          id="email-input"
          name="email"
          placeholder="Masukan Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email !== undefined && formik.touched.email}
          errorMsg={formik.errors.email}
        />
        <Input
          type="password"
          id="password-input"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.password !== undefined && formik.touched.password
          }
          errorMsg={formik.errors.password}
        />
      </div>
      <Button id="login-submit" type="submit" loading={loading}>
        Login
      </Button>
    </form>
  );
}
