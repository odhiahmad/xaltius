import { memo } from "react";
import { lazyLoad } from "../../../utils/lazyload.config";

const Berita = lazyLoad(
  () => import("./index"),
  (module) => module.Berita
);

export default memo(Berita);
