import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setToken } from "utils/cookie";
import Input from "app/components/formik/input/loadable";
import Select from "app/components/formik/select/loadable";
import Button from "app/components/formik/button/loadable";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username tidak boleh kosong"),
  password: Yup.string().required("Password tidak boleh kosong"),
});

const dataOption = [
  {
    value: "Satu",
    label: "satu",
  },
];
export function FormRegistration() {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      setLoading(true);
      // setToken("tes");
      setLoading(false);
    } catch (error) {
      // setToken("test");
      setLoading(false);
    }
  };
  // FORMIK
  const formik = useFormik({
    initialValues: {
      username: "",
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
          id="username-input"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.username !== undefined && formik.touched.username
          }
          errorMsg={formik.errors.username}
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
        <Select
          id="password-input"
          name="provinsi"
          options={dataOption}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.password !== undefined && formik.touched.password
          }
          errorMsg={formik.errors.password}
        />
      </div>
      <Button id="login-submit" type="submit" loading={loading}>
        Registrasi
      </Button>
    </form>
  );
}
