import { useEffect, useRef, useState } from "react";
import useApp from "../stores/useApp";
import { getFormattedDate } from "../utils";

const Login = () => {
  let date = getFormattedDate();
  const [time, setTime] = useState(date);
  const intervalId = useRef<number>();
  const { setAppState } = useApp();

  const updateTime = () => {
    date = getFormattedDate();
    setTime(date);
  };
  intervalId.current = setInterval(updateTime, 1000);

  const handleKeyPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") return setAppState("logged");
  };

  useEffect(() => {
    return clearInterval(intervalId.current);
  });

  return (
    <div className="w-full h-5/6 flex flex-col justify-between items-center" tabIndex={0} onKeyDown={(e) => handleKeyPressed(e)}>
      <div className="flex flex-col items-center mt-12 opacity-70">
        <h1 className="font-bold text-2xl">{time.date}</h1>
        <h2 className="font-bold text-8xl">{time.hour}</h2>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
        <p>Nino</p>
        <p>Press enter...</p>
      </div>
    </div>
  );
};
export default Login;
