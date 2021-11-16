import { memo } from 'react'
import { lazyLoad } from "../../../utils/lazyload.config";


const Registration = lazyLoad(
    () => import('./index'),
    module => module.Registration,
)

export default memo(Registration)