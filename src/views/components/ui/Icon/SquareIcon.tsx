import React from "react";

interface SquareIconProps {
  color?: string;
}

const SquareIcon: React.FC<SquareIconProps> = ({ color = "white" }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="14" height="14" stroke={color} />
    </svg>
  );
};

export default SquareIcon;
