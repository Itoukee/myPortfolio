export const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

export const getFormattedDate = () => {
  const newDate = new Date().toLocaleDateString(undefined, { weekday: "long", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  const arrayParams = newDate.split(" ");

  const date = `${capitalize(arrayParams[0])} ${arrayParams[1]} ${arrayParams[2].slice(0, -1)}`;
  const hour = `${arrayParams[3]}`;

  return { date, hour };
};
