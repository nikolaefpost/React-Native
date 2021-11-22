import * as React from "react"
import Svg, { Path } from "react-native-svg"

function More(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={33}
            height={9}
            fill="none"
            {...props}
        >
            <Path
                fill="#000"
                d="M4.125 0A4.13 4.13 0 000 4.125 4.13 4.13 0 004.125 8.25 4.13 4.13 0 008.25 4.125 4.13 4.13 0 004.125 0zm0 6.875a2.752 2.752 0 01-2.75-2.75 2.752 2.752 0 012.75-2.75 2.752 2.752 0 012.75 2.75 2.752 2.752 0 01-2.75 2.75zM16.5 0a4.13 4.13 0 00-4.125 4.125A4.13 4.13 0 0016.5 8.25a4.13 4.13 0 004.125-4.125A4.13 4.13 0 0016.5 0zm0 6.875a2.752 2.752 0 01-2.75-2.75 2.752 2.752 0 012.75-2.75 2.752 2.752 0 012.75 2.75 2.752 2.752 0 01-2.75 2.75zM28.875 0a4.13 4.13 0 00-4.125 4.125 4.13 4.13 0 004.125 4.125A4.13 4.13 0 0033 4.125 4.13 4.13 0 0028.875 0zm0 6.875a2.752 2.752 0 01-2.75-2.75 2.752 2.752 0 012.75-2.75 2.752 2.752 0 012.75 2.75 2.752 2.752 0 01-2.75 2.75z"
            />
        </Svg>
    )
}

export default More