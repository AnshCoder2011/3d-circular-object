import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./style.css";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <ambientLight />
        <OrbitControls />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={5.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          
        </EffectComposer>
      </Canvas>
      <div className="w-full bg-black py-32">
        <h1 className="text-white flex justify-center items-center text-8xl">
          Welcome to AnshCoder Web Effect.
        </h1>
      </div>
    </>
  );
};

export default App;
