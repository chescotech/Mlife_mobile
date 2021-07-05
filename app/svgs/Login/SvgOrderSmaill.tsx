import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent() {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" >
            <Rect width={32} height={32} rx={8} fill="url(#pattern0)" />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0"
                        transform="translate(-0.191532) scale(0.00134409)"
                    />
                </Pattern>
                <Image
                    id="image0"
                    width={1029}
                    height={744}
                />
            </Defs>
        </Svg>
    )
}
const SvgOrderSmaill = React.memo(SvgComponent)
export default SvgOrderSmaill