import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MenuIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={54}
            fill="none"
            {...props}
        >
            <G filter="url(#prefix__filter0_i_1_26)">
                <Path
                    fill="#fff"
                    d="M27 54c14.912 0 27-12.088 27-27S41.912 0 27 0 0 12.088 0 27s12.088 27 27 27z"
                />
                <Path
                    fill="#000"
                    d="M12 23v-3h27v3H12zm.154 7h16v-3h-16v3zm0 7h20v-3h-20v3z"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}

export default MenuIcon
