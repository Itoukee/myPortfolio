type TextGradientProps = {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
};

const TextGradient = ({
  text,
  className,
  from = "from-orange-700",
  via = "via-blue-500",
  to = "to-green-400",
}: TextGradientProps) => {
  return (
    <span
      className={`${className} bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
    >
      {text}
    </span>
  );
};

export default TextGradient;
