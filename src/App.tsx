import { Canvas } from "@react-three/fiber";
import { Text3DExampleApp, World } from "./world/World";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      {/* <HexApp /> */}
      <Canvas>
        <World />
      </Canvas>
      {/* <AgentCarrApp /> */}
      {/* <FirstCarApp /> */}

      {/* <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <Text3DExampleApp />
      </Canvas> */}

      {/* <FloatingIslandApp /> */}
    </div>
  );
}
export default App;
