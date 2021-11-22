import { memo } from "react";
import { lazyLoad } from "../../../utils/lazyload.config";

const Files = lazyLoad(
  () => import("./index"),
  (module) => module.Files
);

export default memo(Files);
