import { FirstCarApp, Text3DExampleApp, World } from "./world/World";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      {/* <World /> */}
      <FirstCarApp />
      {/* <Text3DExampleApp /> */}
    </div>
  );
}
export default App;
