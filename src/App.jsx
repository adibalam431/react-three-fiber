import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as three from "three";
import Scene from "./scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

function App() {
  return (
    <Canvas flat camera={{fov:35}}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom

          mipmapBlur // Enables or disables mipmap blur.
          intensity={7} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elments in the scene
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
        
      </EffectComposer>
    </Canvas>
  );
}

export default App;
