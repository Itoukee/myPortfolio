import "./App.css";
import { Canvas } from "@react-three/fiber";
import Delorean from "./components/Delorean";
import { Environment } from "@react-three/drei";
import CameraRig from "./components/CameraRig";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas shadows className="w-screen h-screen overflow-hidden sticky">
        <Delorean />
        <Environment preset="dawn" />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default App;
