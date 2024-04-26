import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

const Delorean = () => {
  const gltf = useLoader(GLTFLoader, "./src/assets/3D/scene.gltf");
  return (
    <primitive
      object={gltf.scene}
      position={[10, 1, 0]}
      scale={0.8}
      rotation={[0.2, Math.PI / 4, 0.2]}
    />
  );
};

export default Delorean;
