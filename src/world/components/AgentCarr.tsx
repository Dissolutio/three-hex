import { Suspense } from "react";
import { Gltf, useGLTF } from "@react-three/drei";
import { ModelLoader } from "./ModelLoader";
import { HexCoordinates, cubeToPixel } from "../HexMap3D";

const modelAltitudeAdjustment = {
  agentCarrID: 1,
};

export function MiniatureModel() {
  const hex = { q: 4, r: 9, s: -13, altitude: 4, id: "4,9,-13" };
  const pixel = cubeToPixel(hex as HexCoordinates);
  return (
    <Suspense fallback={<ModelLoader />}>
      <group
        position={[
          pixel.x,
          hex.altitude / 4 + modelAltitudeAdjustment.agentCarrID,
          pixel.y,
        ]}
      >
        <Gltf
          src="/agent_carr_low_poly_colored_1.glb"
          receiveShadow
          castShadow
        />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/Agent_Karr_Scanned.glb");
