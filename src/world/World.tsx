import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { AgentCarr } from "../AgentCarr";
import { ModelLoader } from "./components/ModelLoader";
import { Cube } from "./components/Cube";

type Props = {};

export const World = (props: Props) => {
  return (
    <Canvas
      // gl={{ preserveDrawingBuffer: true }}
      // shadows
      // dpr={[1, 1.5]}
      camera={{ position: [0, 0, 150], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={<ModelLoader />}>
        <AgentCarr />
      </Suspense>
      <Cube />
      <OrbitControls autoRotate />
      <Environment preset="forest" background />
    </Canvas>
  );
};
