import React from "react";

const Button = ({ title, textColor, bgColor, borderColor, className = "" }) => {
  return (
    <button
      className={`${textColor} ${bgColor} px-4 py-2 border-2 ${borderColor} rounded-3xl font-semibold ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
