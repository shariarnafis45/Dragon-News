import React from "react";
import { Triangle } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
     
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#D72050  "
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      
    </div>
  );
};

export default loading;
