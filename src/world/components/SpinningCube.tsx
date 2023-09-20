import { Vector3, useFrame } from "@react-three/fiber";
import { useRef } from "react";

type Props = {
  position?: Vector3;
};

export const SpinningCube = (props: Props) => {
  const boxMesh = useRef<any>();
  const position = props.position || [0, 0, 0];

  useFrame(() => {
    if (boxMesh.current.rotation) {
      boxMesh.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh ref={boxMesh} rotation={[10, 10, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={0xcc0000} />
      </mesh>
    </group>
  );
};
