import React from "react";

type TitleType = {
  name: string;
};

const Title = ({ name }: TitleType) => {
  return <div className="text-gray text-xl">{name}</div>;
};

export default Title;
