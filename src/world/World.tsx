import { Canvas, useThree } from "@react-three/fiber";
import { Color, MeshBasicMaterial, MeshPhongMaterial } from "three";
import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Text3D,
  Sky,
  PointerLockControls,
  Cloud,
  Stage,
  MapControls,
  CameraControls,
} from "@react-three/drei";

import { MiniatureModel } from "./components/AgentCarr";
import { StarbucksCup } from "./components/StarbucksCup";
import { FirstCar } from "./components/FirstCar";
import { FloatingIsland } from "./components/FloatingIsland";
import { HexMap3D } from "./HexMap3D";

export const World = () => {
  return (
    <Canvas>
      <Stage>
        <MiniatureModel />
        <ambientLight intensity={0.85} />
        <directionalLight position={[150, 150, 150]} intensity={1} />
        <FloatingIsland />
        <HexMap3D />
        {/* <AgentCarr /> */}
        {/* <axesHelper position={[0, 1, 0]} scale={1000} /> */}
        <MapControls />
      </Stage>
      {/* <CameraControls /> */}
      {/* <OrbitControls /> */}
      {/* <PerspectiveCamera makeDefault position={[0, 4, 8]} fov={50} /> */}
    </Canvas>
  );
};

export const AgentCarrApp = () => {
  return (
    <Canvas camera={{ position: [0, 5, 100], fov: 50 }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <MiniatureModel />
      <OrbitControls />
      <Environment files="/potsdamer_platz_1k.hdr" background />
    </Canvas>
  );
};
export const FirstCarApp = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={1} />
      <FirstCar />
      <OrbitControls autoRotate />
      <Environment files="/potsdamer_platz_1k.hdr" background />
    </Canvas>
  );
};
export const FloatingIslandApp = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={1} />
      <FloatingIsland />
      <OrbitControls autoRotate />
      <Environment files="/GCanyon_C_YumaPoint_3k.hdr" background />
    </Canvas>
  );
};
export const Text3DExampleApp = ({ margin = 0.5 }) => {
  const { width, height } = useThree((state) => state.viewport);
  const magenta = new Color("#ff2080");
  const green = new Color("#20ff80");
  const blue = new Color("#2080ff");
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
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
