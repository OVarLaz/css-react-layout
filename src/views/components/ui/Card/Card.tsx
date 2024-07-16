import React from "react";

type CardType = {
  id: number | string;
  children: any;
};

const Card = ({ id, children }: CardType) => {
  return (
    <div
      key={id}
      className="p-4 bg-white rounded-lg shadow-custom flex flex-col"
    >
      {children}
    </div>
  );
};

export default Card;
