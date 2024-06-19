const Button = ({
  title,
  textColor,
  bgColor,
  borderColor,
  link,
  className = "",
}) => {
  return (
    <a href={link}>
      <button
        className={`${textColor} ${bgColor} px-4 py-2 border-2 ${borderColor} font-sans text-md rounded-3xl font-semibold ${className}`}
      >
        {title}
      </button>
    </a>
  );
};

export default Button;
