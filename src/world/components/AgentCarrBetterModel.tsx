import { useGLTF } from "@react-three/drei";

export function AgentCarrBetterModel() {
  const { nodes, materials } = useGLTF(
    "/agent_carr_low_poly_colored.glb"
  ) as any;
  console.log(
    "🚀 ~ file: AgentCarrBetterModel.tsx:7 ~ AgentCarrBetterModel ~ nodes:",
    nodes
  );
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001.geometry}
        material={materials.Gunmetal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_1.geometry}
        material={nodes.Mesh_0001_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_2.geometry}
        material={materials.DarkBlueCoat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_3.geometry}
        material={materials.BlackSkin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_4.geometry}
        material={materials.DarkGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_5.geometry}
        material={materials.LightBlue}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_6.geometry}
        material={materials.Silver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_7.geometry}
        material={materials.BlackHair}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_8.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_9.geometry}
        material={materials.Blade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001_10.geometry}
        material={materials.BlueGray}
      />
    </>
  );
}

useGLTF.preload("/agent_carr_low_poly_colored.glb");
