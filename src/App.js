import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

//import myImage from "./assets/tailwind.png"

const Ellipse3d = (props) => {
  
  class Ellipse extends THREE.Curve {
    constructor(xRadius, yRadius) {
      super()
      this.xRadius = xRadius
      this.yRadius = yRadius
    }

    getPoint(t, optionalTarget = new THREE.Vector3()) {
      const point = optionalTarget
      var radians = 2 * Math.PI * t
      if (props.plane === "x") return new THREE.Vector3(0, this.xRadius * Math.cos(radians),
        this.yRadius * Math.sin(radians))
      if (props.plane === "y") return new THREE.Vector3(this.xRadius * Math.cos(radians), 0,
        this.yRadius * Math.sin(radians))
      if (props.plane === "z") return new THREE.Vector3(this.xRadius * Math.cos(radians),
        this.yRadius * Math.sin(radians), 0)
    }
  }
  const path = new Ellipse(props.eccentricity[0], props.eccentricity[1], props.plane)
  const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.z += 0.01
  })
  
    return (
      <mesh rotation-z={props.zRotation} ref={mesh}>
          <tubeGeometry  args={[path, 100, 0.1, 20, false]}/>
          <meshBasicMaterial color="cyan" />
        </mesh>
    )
}

export default Ellipse3d