import {
  AgentCarrApp,
  FirstCarApp,
  FloatingIslandApp,
  Text3DExampleApp,
  World,
  HexApp,
} from "./world/World";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      {/* <HexApp /> */}
      <World />
      {/* <AgentCarrApp /> */}
      {/* <FirstCarApp /> */}
      {/* <Text3DExampleApp /> */}
      {/* <FloatingIslandApp /> */}
    </div>
  );
}
export default App;
