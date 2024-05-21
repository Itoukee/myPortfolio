import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

const Delorean = () => {
  const gltf = useGLTF("./src/assets/3D/scene.gltf");
  return (
    <mesh>
      <primitive
        object={gltf.scene}
        position={[10, 1, 0]}
        scale={0.8}
        rotation={[0.2, Math.PI / 4, 0.2]}
      />
    </mesh>
  );
};

const DeloreanScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          camera={{ position: [5, 1, 25], fov: 40 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Delorean />
          <Environment preset="dawn" />
        </Canvas>
      )}
    </>
  );
};

export default DeloreanScene;
