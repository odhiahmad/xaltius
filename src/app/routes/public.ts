import { Login, Registration, Berita } from "../pages";

const routes = [
  {
    key: "page-login",
    name: "page-login",
    component: Login,
    path: "/",
  },
  {
    key: "page-login",
    name: "page-login",
    component: Login,
    path: "/login",
  },
  {
    key: "page-registration",
    name: "page-registration",
    component: Registration,
    path: "/registration",
  },
  {
    key: "page-berita",
    name: "page-berita",
    component: Berita,
    path: "/berita",
  },
];

export default routes;
