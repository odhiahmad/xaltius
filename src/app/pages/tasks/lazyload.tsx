import { memo } from "react";
import { lazyLoad } from "../../../utils/lazyload.config";

const Tasks = lazyLoad(
  () => import("./index"),
  (module) => module.Tasks
);

export default memo(Tasks);
