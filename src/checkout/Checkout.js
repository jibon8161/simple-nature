import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const getDataFromLocalStorage = () => {
      // Retrieve the array from localStorage
      const storedData = localStorage.getItem("dataForComp2");

      if (storedData) {
        const dataArray = JSON.parse(storedData);

        const retrievedData1 = dataArray[0];
        const retrievedData2 = dataArray[1];

        setData1(retrievedData1);
        setData2(retrievedData2);
      }
    };

    getDataFromLocalStorage();
  }, []);

  return (
    <div className="">
      <p>checkout page</p>
    </div>
  );
};

export default Checkout;
