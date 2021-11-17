import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setToken } from "utils/cookie";
import Input from "app/components/formik/input/loadable";
import Select from "app/components/formik/select/loadable";
import Button from "app/components/formik/button/loadable";
import Radio from "app/components/formik/radio/loadable";

const loginSchema = Yup.object().shape({
  namaDepan: Yup.string().required("Nama depan tidak boleh kosong"),
  namaBelakang: Yup.string().required("Nama belakang tidak boleh kosong"),
  email: Yup.string()
    .email("Format email salah")
    .required("Email tidak boleh kosong"),
  password: Yup.string().required("Password tidak boleh kosong"),
  jenisKelamin: Yup.string().required("Pilih salah satu jenis kelamin"),
  provinsi: Yup.string().required("Pilih salah satu Provinsi"),
  kota: Yup.string().required("Pilih salah satu Kota"),
});

const dataOption = [
  {
    value: "1",
    label: "Sumatera Barat",
  },
  {
    value: "2",
    label: "Riau",
  },
];

const jenisKelaminOpt = [
  {
    value: "1",
    label: "Pria",
  },
  {
    value: "2",
    label: "Wanita",
  },
];

const dataOptionKota = [
  {
    value: "1",
    induk: "1",
    label: "Padang",
  },
  {
    value: "2",
    induk: "1",
    label: "Bukittinggi",
  },
  {
    value: "3",
    induk: "1",
    label: "Padang Panjang",
  },
  {
    value: "4",
    induk: "1",
    label: "Solok Selatan",
  },
  {
    value: "5",
    induk: "1",
    label: "Pesisir Selatan",
  },
  {
    value: "1",
    induk: "2",
    label: "Pekanbaru",
  },
  {
    value: "2",
    induk: "2",
    label: "Dumai",
  },
  {
    value: "3",
    induk: "2",
    label: "Bagan Batu",
  },
  {
    value: "4",
    induk: "2",
    label: "Siak",
  },
  {
    value: "5",
    induk: "2",
    label: "Bangkinang",
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
      namaDepan: "",
      namaBelakang: "",
      email: "",
      password: "",
      jenisKelamin: "",
      provinsi: "",
      kota: "",
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
          id="nama-depan-input"
          name="namaDepan"
          placeholder="Nama Depan"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.namaDepan !== undefined && formik.touched.namaDepan
          }
          errorMsg={formik.errors.namaDepan}
        />
        <Input
          id="nama-belakang-input"
          name="namaBelakang"
          placeholder="Nama Belakang"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.namaBelakang !== undefined &&
            formik.touched.namaBelakang
          }
          errorMsg={formik.errors.namaBelakang}
        />
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
        <Select
          id="provinsi-input"
          name="provinsi"
          options={dataOption}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.provinsi !== undefined && formik.touched.provinsi
          }
          errorMsg={formik.errors.provinsi}
        />
        <Select
          id="kota-input"
          name="kota"
          options={dataOptionKota}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.kota !== undefined && formik.touched.kota}
          errorMsg={formik.errors.kota}
        />
        <Radio
          id="jenis-kelamin-input"
          name="jenisKelamin"
          options={jenisKelaminOpt}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.jenisKelamin !== undefined &&
            formik.touched.jenisKelamin
          }
          errorMsg={formik.errors.jenisKelamin}
        />
      </div>
      <Button id="login-submit" type="submit" loading={loading}>
        Registrasi
      </Button>
    </form>
  );
}
