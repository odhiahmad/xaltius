import { memo } from "react";
import { lazyLoad } from "../../../utils/lazyload.config";

const Calendar = lazyLoad(
  () => import("./index"),
  (module) => module.Calendar
);

export default memo(Calendar);
