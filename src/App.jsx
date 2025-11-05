import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as three from "three";
import Scene from "./scene";

function App() {
  
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
  );
}

export default App;
