import { Canvas } from "@react-three/fiber";
import { AgentCarr } from "./AgentCarr";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { ModelLoader } from "./ModelLoader";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
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
        <OrbitControls autoRotate />
        <Environment preset="forest" background />
      </Canvas>
    </div>
  );
}
export default App;
