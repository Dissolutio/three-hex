import { Canvas } from "@react-three/fiber";
import { AgentCarrApp, Text3DExampleApp, World } from "./world/World";
import { motion } from "framer-motion";
import { LookAtApp } from "./world/LookAtApp";
import { AgentCarrBetterModel } from "./world/components/AgentCarrBetterModel";

function App() {
  return (
    <motion.div
      id="canvas-container"
      // style={{ width: "500px", height: "500px" }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* <HexApp /> */}
      {/* <Canvas>
        <World />
      </Canvas> */}
      <AgentCarrApp />
      {/* <LookAtApp /> */}
      {/* <AgentCarrApp /> */}
      {/* <FirstCarApp /> */}

      {/* <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <Text3DExampleApp />
      </Canvas> */}

      {/* <FloatingIslandApp /> */}
    </motion.div>
  );
}
export default App;
