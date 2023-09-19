import React from "react";

type Props = {};

export const Cube = (props: Props) => {
  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
