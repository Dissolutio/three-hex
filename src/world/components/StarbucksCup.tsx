import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    coffee_cup_top_16oz: THREE.Mesh;
  };
  materials: {
    ["13 - Default"]: THREE.Material;
  };
};

export const StarbucksCup = (props: MeshProps) => {
  const { nodes, materials } = useGLTF("/coffee-transformed.glb") as GLTFResult;
  const texture = useTexture("/1200px-Starbucks_Logo_ab_2011.svg.png");
  return (
    <group dispose={null}>
      <mesh
        {...props}
        castShadow
        receiveShadow
        geometry={nodes.coffee_cup_top_16oz.geometry}
        material={materials["13 - Default"]}
      >
        <Decal
          position={[0, 0.75, 0.3]}
          rotation={[0, 0, 0]}
          scale={[0.52, 0.6, 0.6]}
          map={texture}
        />
      </mesh>
    </group>
  );
};
