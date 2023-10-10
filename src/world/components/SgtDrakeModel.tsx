import { Suspense } from "react";
import { Gltf, useGLTF } from "@react-three/drei";
import { ModelLoader } from "./ModelLoader";
import { HexCoordinates, cubeToPixel } from "../HexMap3D";

const modelAltitudeAdjustment = {
  sgtDrakeRotvId: 1,
};

export function SgtDrakeModel() {
  const hex = { q: 4, r: 9, s: -13, altitude: 4, id: "4,9,-13" };
  const pixel = cubeToPixel(hex as HexCoordinates);
  return (
    <Suspense fallback={<ModelLoader />}>
      <group
        position={[
          pixel.x,
          hex.altitude / 4 + modelAltitudeAdjustment.sgtDrakeRotvId,
          pixel.y,
        ]}
        rotation={[0, Math.PI, 0]}
      >
        <Gltf src="/sgt_drake_low_poly_colored.glb" receiveShadow castShadow />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/sgt_drake_low_poly_colored.glb");
