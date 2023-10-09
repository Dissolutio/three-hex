import * as THREE from "three";
import { useRef, useLayoutEffect } from "react";
import { giantsTableBoardHexes } from "./giantsTable";

const threeHex = new THREE.Object3D();
const HEX_RADIUS = 1;
const HEX_SPACING = 1.01;

export type HexCoordinates = {
  q: number;
  r: number;
  s: number;
  id: string;
};
export const cubeToPixel = (hex: HexCoordinates) => {
  const x = HEX_RADIUS * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r);
  const y = HEX_RADIUS * ((3 / 2) * hex.r);
  return { x: x * HEX_SPACING, y: y * HEX_SPACING };
};
const boardHexesArray = Object.values(giantsTableBoardHexes);
const hexTerrainColor = {
  grass: "#60840d",
  water: "#3794fd",
  rock: "#475776",
  sand: "#ab8e10",
};
export function HexMap3D() {
  const ref = useRef(undefined!);

  // effect where we create and update instance mesh for each board hex
  useLayoutEffect(() => {
    boardHexesArray.forEach((boardHex, i) => {
      const pixel = cubeToPixel(boardHex);
      threeHex.position.set(pixel.x, boardHex.altitude / 4, pixel.y);
      const heightScale = boardHex.altitude === 0 ? 0.5 : boardHex.altitude; // water, at 0 altitude, was rendering black darkness
      threeHex.scale.set(1, heightScale, 1);
      // color terrain
      ref.current.setColorAt(
        i,
        new THREE.Color(hexTerrainColor[boardHex.terrain])
      );
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
      geometry - an instance of THREE.BufferGeometry
      material - an instance of THREE.Material. Default is a new MeshBasicMaterial
      count - the number of instances
  */

  return (
    <instancedMesh ref={ref} args={[null, null, boardHexesArray.length]}>
      <cylinderGeometry args={[1, 1, 0.5, 6]} />
      <meshLambertMaterial />
    </instancedMesh>
  );
}
