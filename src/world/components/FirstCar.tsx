import { Gltf, useGLTF } from "@react-three/drei";

export function FirstCar() {
  return <Gltf src="/first_car_model_only.glb" receiveShadow castShadow />;
}

useGLTF.preload("/first_car_model_only.glb");
