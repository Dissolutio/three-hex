import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { AgentCarr } from "./components/AgentCarr";
import { Cube } from "./components/Cube";
import { SpinningCube } from "./components/SpinningCube";

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
      <AgentCarr />
      <SpinningCube />
      <OrbitControls autoRotate />
      <Environment preset="forest" background />
    </Canvas>
  );
};
