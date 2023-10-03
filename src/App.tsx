import {
  FirstCarApp,
  FloatingIslandApp,
  Text3DExampleApp,
  World,
} from "./world/World";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <World />
      {/* <FirstCarApp /> */}
      {/* <Text3DExampleApp /> */}
      {/* <FloatingIslandApp /> */}
    </div>
  );
}
export default App;
