import React from "react";

const BuySection: React.FC = () => {
  return (
    <div className=" bg-white rounded-lg flex flex-col items-center">
      <div className="bg-custom-gradient w-36 h-20 rounded-lg mt-6"></div>
      <div className="flex flex-col py-4">
        <span className="text-xs">Buy more space now!</span>
        <span className="text-tertiary-gray text-tiny">
          Upgrade to cloud premium
        </span>
      </div>
      <div className="mb-6 flex items-center justify-center w-36 h-10 bg-primary-orange rounded text-white text-xxs">
        Upgrade Account!
      </div>
    </div>
  );
};

export default BuySection;
