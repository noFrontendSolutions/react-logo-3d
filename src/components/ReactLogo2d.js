import React from 'react'
import Ellipse2d from "./2d-components/Ellipse2d"
import CircleShape from "./2d-components/Circle-Shape"

const ReactLogo2d = () => {
    return (
        <>
            <Ellipse2d zRotation={Math.PI / 5.5} eccentricity={[1, 2.9]} plane={"x-y"} color={"#60DAF8"}/>
            <Ellipse2d zRotation={-Math.PI / 5.5} eccentricity={[1, 2.9]} plane={"x-y"} color={"#60DAF8"}/>
            <Ellipse2d eccentricity={[2.9, 1]} plane={"x-y"} color={"#60DAF8"}/>
            <CircleShape color={"#60DAF8"}/>
        </>
    )
}

export default ReactLogo2d

