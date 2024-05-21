import { useEffect, useState } from "react";
import "./App.css";
import DeloreanScene from "./components/Delorean";
import TextGradient from "./components/design/TextGradient";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 769px)");

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
    <div className="w-screen h-screen overflow-auto">
      <div className="w-full h-full flex">
        <div className="w-full bg-slate-300 md:w-1/3 ">
          <h1 className="flex flex-wrap m-4 sticky font-bold space-x-4">
            <TextGradient text={"Nino"} from="from-violet-700" />
            <span>GARO</span>
          </h1>
        </div>

        {isMobile ? (
          <></>
        ) : (
          <div className="bg-red-300 md:w-full">
            <DeloreanScene />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
