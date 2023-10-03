import { Suspense, useRef } from "react";
import { Gltf, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ModelLoader } from "./ModelLoader";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export function AgentCarr() {
  // const group = useRef();
  // const { nodes } = useGLTF("/agent_carr_low_poly_colored_1.glb") as GLTFResult;
  return (
    <Suspense fallback={<ModelLoader />}>
      <Gltf src="/agent_carr_low_poly_colored_1.glb" receiveShadow castShadow />

      {/* <group ref={group} dispose={null} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group> */}
    </Suspense>
  );
}

useGLTF.preload("/Agent_Karr_Scanned.glb");
