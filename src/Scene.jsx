import React, { useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as three from "three";


const Scene = () => {
    const [img] = useTexture(["../public/img2 (2).png"]);
    const scene = useRef();
    useFrame((state,delta)=>{
scene.current.rotation.y += delta;
    })
  return (
    <mesh ref={scene} rotation={[0,1.2,0.3]}>
        <cylinderGeometry args={[1.5,1.5,6,60,60,true]} />
        <meshBasicMaterial transparent map={img} side={three.DoubleSide} />
      </mesh>
  )
}

export default Scene