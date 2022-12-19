// import * as THREE from 'three'
// import { useMemo } from 'react'
// import { applyProps } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";

export function Mountain(props) {
  const { scene, nodes, materials } = useGLTF(
    "./components/test_mountain_1.glb"
  );

  return <primitive object={scene} {...props} />;
}
// export default Mountain;
