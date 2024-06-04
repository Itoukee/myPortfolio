import { useLayoutEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import useApp from "./stores/useApp";

const App = () => {
  const { setAppState } = useApp();

  useLayoutEffect(() => {
    const initialize = () => {
      const state = localStorage.getItem("state");
      if (state === "logged") setAppState("logged");
      else setAppState("unlogged");
    };
    initialize();
  }, [setAppState]);

  return (
    <div className="w-screen h-screen bg-space overflow-hidden">
      <Header />
      <Layout />
    </div>
  );
};

export default App;
