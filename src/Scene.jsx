import React from 'react'
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as three from "three";

const Scene = () => {
    const [img1,img2,img3] = useTexture(["../public/vite.svg","../public/vite.svg","../public/vite.svg"])
  return (
    <mesh>
        <cylinderGeometry args={[1,1,1,25,25,true]} />
        <meshBasicMaterial map={img1} side={three.DoubleSide} />
      </mesh>
  )
}

export default Scene