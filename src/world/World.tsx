import { Canvas, useThree } from "@react-three/fiber";
import { Color } from "three";
import {
  Box,
  Center,
  Environment,
  OrbitControls,
  Text3D,
} from "@react-three/drei";

import { AgentCarr } from "./components/AgentCarr";
import { Cube } from "./components/Cube";
import { SpinningCube } from "./components/SpinningCube";
import { StarbucksCup } from "./components/StarbucksCup";
import { FirstCar } from "./components/FirstCar";

// TODO: https://studiox.lib.rochester.edu/my-journey-with-blender-and-some-tutorials-to-get-you-started/

export const World = () => {
  return (
    <Canvas
      // gl={{ preserveDrawingBuffer: true }}
      // shadows
      // dpr={[1, 1.5]}
      camera={{ position: [0, 5, 10], fov: 50 }}
    >
      <ambientLight intensity={1} />
      {/* <AgentCarr /> */}
      <FirstCar />
      {/* <SpinningCube /> */}
      {/* <Cube position={[10, 0, 0]} /> */}
      {/* <Box args={[3, 3, 3]}>
        <meshStandardMaterial color="hotpink" />
      </Box> */}
      <OrbitControls autoRotate />
      <Environment preset="city" background />
    </Canvas>
  );
};
export const Text3DExampleApp = () => {
  const magenta = new Color("#ff2080");
  const green = new Color("#20ff80");
  const blue = new Color("#2080ff");
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Text3DExampleScene />
      <axesHelper
        scale={2}
        position={[0, 0, 0]}
        onUpdate={(self) => self.setColors(magenta, green, blue)}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
function Text3DExampleScene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <Center
        bottom
        right
        position={[-width / 2 + margin, height / 2 - margin, 0]}
      >
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          top left
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          bottom right
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {`hello\nworld`}
          <meshNormalMaterial />
        </Text3D>
        <Center position={[-1.25, 0, 0]}>
          <StarbucksCup scale={2} />
        </Center>
      </Center>
    </>
  );
}
