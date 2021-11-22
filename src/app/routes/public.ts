import { Tasks, Files, Activity, Calendar } from "../pages";

const routes = [
  {
    key: "tasks",
    name: "tasks",
    component: Tasks,
    path: "/",
  },
  {
    key: "tasks",
    name: "tasks",
    component: Tasks,
    path: "/tasks",
  },
  {
    key: "files",
    name: "files",
    component: Files,
    path: "/files",
  },
  {
    key: "activity",
    name: "activity",
    component: Activity,
    path: "/activity",
  },
  {
    key: "calendar",
    name: "calendar",
    component: Calendar,
    path: "/calendar",
  },
];

export default routes;
