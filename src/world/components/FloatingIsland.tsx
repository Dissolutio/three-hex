import { Gltf, useGLTF } from "@react-three/drei";

export function FloatingIsland() {
  return <Gltf src="/floating_lowpoly_island.glb" receiveShadow castShadow />;
}

useGLTF.preload("/floating_lowpoly_island.glb");
