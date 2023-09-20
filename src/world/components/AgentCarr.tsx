import { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ModelLoader } from "./ModelLoader";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export function AgentCarr() {
  const group = useRef();
  const { nodes } = useGLTF("/Agent_Karr_Scanned.glb") as GLTFResult;
  return (
    <Suspense fallback={<ModelLoader />}>
      <group ref={group} dispose={null} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </Suspense>
  );
}

useGLTF.preload("/Agent_Karr_Scanned.glb");
