import { useState } from "react";

const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

const getFormattedDate = () => {
  let formattedDate = "";
  const newDate = new Date().toLocaleDateString(undefined, { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  const arrayParams = newDate.split(" ");

  formattedDate = `${capitalize(arrayParams[0])} ${arrayParams[1]} ${arrayParams[2].slice(0, -1)} ${arrayParams[3]}`;

  return formattedDate;
};

const Header = () => {
  let date = getFormattedDate();
  const [time, setTime] = useState(date);

  const updateTime = () => {
    date = getFormattedDate();
    setTime(date);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="w-full flex font-bold">
      <div className="w-1/2"></div>
      <div className="flex w-1/2 mx-2 justify-end">
        <p>{time}</p>
      </div>
    </div>
  );
};
export default Header;
