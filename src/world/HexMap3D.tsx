import * as THREE from "three";
import { useRef, useLayoutEffect } from "react";
import { giantsTableBoardHexes } from "./giantsTable";

const threeHex = new THREE.Object3D();
const HEX_RADIUS = 1;
const HEX_SPACING = 0.05;

type HexCoordinates = {
  q: number;
  r: number;
  s: number;
  id: string;
};

const boardHexesArray = Object.values(giantsTableBoardHexes);

export function HexMap3D() {
  const ref = useRef(undefined!);
  const hexCoordToPosition = (hex: HexCoordinates) => {
    const x =
      HEX_RADIUS * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r) +
      HEX_SPACING;
    const y = HEX_RADIUS * ((3 / 2) * hex.r) + HEX_SPACING;
    return { x, y };
  };
  // effect where we create and update for all the hexes
  useLayoutEffect(() => {
    boardHexesArray.forEach((element, i) => {
      const t = hexCoordToPosition(element);
      threeHex.position.set(t.x, element.altitude / 4, t.y);
      threeHex.scale.set(1, element.altitude, 1);
      // update
      threeHex.updateMatrix();
      ref.current.setMatrixAt(i, threeHex.matrix);
      ref.current.instanceMatrix.needsUpdate = true;
    });
  }, []);

  /* 
  instancedMesh 
  
  https://threejs.org/docs/#api/en/objects/InstancedMesh
    args: geometry, material, count
      geometry - an instance of BufferGeometry.
      material - an instance of Material. Default is a new MeshBasicMaterial.
      count - the number of instances.
  */

  //  const redColor = new THREE.Color('red')

  return (
    <instancedMesh ref={ref} args={[null, null, boardHexesArray.length]}>
      {/* <instancedBufferAttribute
            attach="attributes-color"
            args={[redColor, 3]}
          /> */}
      <cylinderGeometry args={[1, 1, 0.5, 6]} />
      <meshLambertMaterial />
    </instancedMesh>
  );
}
