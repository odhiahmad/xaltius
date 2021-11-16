/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from "utils/loadable";

const Select = lazyLoad(
  () => import("./index"),
  (module) => module.Select
);

export default Select;
