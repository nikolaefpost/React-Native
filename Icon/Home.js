import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={23}
            fill="none"
            {...props}
        >
            <Path
                fill="#000"
                d="M16.107 22.755H6.65a4.063 4.063 0 01-4.21-3.868v-5.07a.811.811 0 011.626 0v5.07A2.44 2.44 0 006.65 21.13h9.457a2.442 2.442 0 002.584-2.243v-5.07a.811.811 0 011.625 0v5.07a4.062 4.062 0 01-4.209 3.868zm6.41-10.798a.818.818 0 00.178-.89.804.804 0 00-.177-.264L11.955.24a.817.817 0 00-1.154 0L.24 10.803a.815.815 0 101.154 1.154l9.985-9.994 9.986 9.994a.807.807 0 00.577.24.808.808 0 00.577-.24z"
            />
        </Svg>
    )
}

export default Home