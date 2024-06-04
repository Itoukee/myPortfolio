import useApp from "../stores/useApp";
import Desktop from "./Desktop";
import Login from "./Login";

const Layout = () => {
  const { appState } = useApp();

  return <div className="w-full h-full flex">{appState === "unlogged" ? <Login /> : appState === "logged" ? <Desktop /> : <p>Nothing</p>}</div>;
};
export default Layout;
