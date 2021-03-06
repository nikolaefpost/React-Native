import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Point(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={26}
            fill="none"
            {...props}
        >
            <Path
                fill="#000"
                stroke="#18AAD9"
                d="M3.576 3.552c4.103-4.07 10.745-4.069 14.848 0a10.34 10.34 0 010 14.717l-7.195 7.137a.327.327 0 01-.458 0l-7.195-7.137-.352.355.352-.355a10.34 10.34 0 010-14.717zm7.072 20.835l.352.349.352-.349 6.614-6.561a9.734 9.734 0 000-13.83C14.124.185 7.876.185 4.034 3.996a9.734 9.734 0 000 13.83l6.614 6.561z"
            />
            <Path
                fill="#000"
                stroke="#18AAD9"
                d="M12.813 13.118h.012l.146-.146c2.172-2.172.673-5.967-2.471-5.967A3.493 3.493 0 007.005 10.5a3.493 3.493 0 003.495 3.495 3.43 3.43 0 002.302-.867l.011-.01zM6.5 10.5c0-2.211 1.789-4 4-4 2.211 0 4 1.789 4 4 0 2.211-1.789 4-4 4-2.211 0-4-1.789-4-4z"
            />
        </Svg>
    )
}

export default Point