import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

const Delorean = () => {
  const gltf = useLoader(GLTFLoader, "./src/assets/3D/scene.gltf");
  return <primitive object={gltf.scene} />;
};

export default Delorean;
