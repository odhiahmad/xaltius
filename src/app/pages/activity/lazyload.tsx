import { memo } from "react";
import { lazyLoad } from "../../../utils/lazyload.config";

const Activity = lazyLoad(
  () => import("./index"),
  (module) => module.Activity
);

export default memo(Activity);
