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
const hexTerrainColor = {
  grass: "#60840d",
  water: "#3794fd",
  rock: "#475776",
  sand: "#ab8e10",
};
export function HexMap3D() {
  const ref = useRef(undefined!);
  const hexCoordToPosition = (hex: HexCoordinates) => {
    const x =
      HEX_RADIUS * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r) +
      HEX_SPACING;
    const y = HEX_RADIUS * ((3 / 2) * hex.r) + HEX_SPACING;
    return { x, y };
  };
  // effect where we create and update instance mesh for all the hexes
  useLayoutEffect(() => {
    boardHexesArray.forEach((element, i) => {
      const t = hexCoordToPosition(element);
      threeHex.position.set(t.x, element.altitude / 4, t.y);
      const heightScale = element.altitude === 0 ? 0.5 : element.altitude; // water, at 0 altitude, was rendering black darkness
      threeHex.scale.set(1, heightScale, 1);
      // color terrain
      ref.current.setColorAt(
        i,
        new THREE.Color(hexTerrainColor[element.terrain])
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
