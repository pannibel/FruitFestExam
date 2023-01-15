import { useGLTF } from "@react-three/drei";

export function Mountain(props) {
  const { scene, nodes, materials } = useGLTF(
    "./components/test_mountain_1.glb"
  );

  return <primitive object={scene} {...props} />;
}
