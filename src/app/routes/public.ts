import { Login, Registration } from "../pages";

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
];

export default routes;
