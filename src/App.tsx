import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Delorean from "./components/Delorean";
import { Environment, OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Delorean />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
