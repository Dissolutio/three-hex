import * as THREE from "three";
import { useRef, useLayoutEffect } from "react";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { giantsTableBoardHexes } from "./giantsTable";
const MeshEdgesMaterial = shaderMaterial(
  {
    color: new THREE.Color("white"),
    size: new THREE.Vector3(1, 1, 1),
    thickness: 0.01,
    smoothness: 0.2,
  },
  /*glsl*/ `varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
  }`,
  /*glsl*/ `varying vec3 vPosition;
  uniform vec3 size;
  uniform vec3 color;
  uniform float thickness;
  uniform float smoothness;
  void main() {
    vec3 d = abs(vPosition) - (size * 0.5);
    float a = smoothstep(thickness, thickness + smoothness, min(min(length(d.xy), length(d.yz)), length(d.xz)));
    gl_FragColor = vec4(color, 1.0 - a);
  }`
);

extend({ MeshEdgesMaterial });
const threeHex = new THREE.Object3D();
const HEX_RADIUS = 1;
const HEX_SPACING = 0.05;

// type HexCoordinates = {
//   q: number;
//   r: number;
//   s: number;
//   id: string;
// };

const boardHexesArray = Object.values(giantsTableBoardHexes);

export function HexMap3D() {
  // const ref = useRef(undefined!);
  // const outlines = useRef(undefined!);
  const ref = useRef();
  const outlines = useRef();
  // const hexCoordToPosition = (hex: HexCoordinates) => {
  const hexCoordToPosition = (hex) => {
    const x = HEX_RADIUS * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r) + HEX_SPACING;
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
      // Re-use geometry + instance matrix
      outlines.current.geometry = ref.current.geometry;
      outlines.current.instanceMatrix = ref.current.instanceMatrix;
    });
  }, []);

  // <instancedBufferAttribute
  //           attach="attributes-color"
  //           args={[colors, 3]}
  //         />

  /* 
  instancedMesh 
  
  https://threejs.org/docs/#api/en/objects/InstancedMesh
    args: geometry, material, count
      geometry - an instance of BufferGeometry.
      material - an instance of Material. Default is a new MeshBasicMaterial.
      count - the number of instances.
  */
 const redColor = new THREE.Color('red')
 const size = [1, 1, 0.5, 6]
//  const terrainColor
  return (
    <group>
      <instancedMesh ref={ref} args={[null, null, boardHexesArray.length]}>
      <instancedBufferAttribute
            attach="attributes-color"
            args={[redColor, 3]}
          />
        <cylinderGeometry args={[...size]} />
        <meshLambertMaterial />
      </instancedMesh>
      <instancedMesh ref={outlines} args={[null, null, boardHexesArray.length]}>
        <meshEdgesMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
          size={size}
          color="orange"
          thickness={0.001}
          smoothness={0.005}
        />
      </instancedMesh>
    </group>
  );
}
