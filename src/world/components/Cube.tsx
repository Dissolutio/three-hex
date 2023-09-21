import { Vector3 } from "@react-three/fiber";

type Props = {
  position?: Vector3;
};
export const Cube = (props: Props) => {
  return (
    <>
      <mesh position={props?.position ?? [0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
