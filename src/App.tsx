import "./App.css";
import DeloreanScene from "./components/Delorean";
import TextGradient from "./components/design/TextGradient";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <h1 className="w-fullflex flex-wrap sticky  font-bold space-x-4  md:w-1/2">
        <TextGradient
          text={"Nino"}
          className="font-bold"
          from="from-violet-700"
        />
        <span>GARO</span>
      </h1>
      <DeloreanScene />
    </div>
  );
};

export default App;
