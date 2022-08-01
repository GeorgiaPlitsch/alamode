import * as Api from "../../Api/Api.js";
import FabricCheckerForm from "../../components/FabricCheckerForm/FabricCheckerForm";

import React, { useEffect, useState } from "react";

const FabricChecker = () => {
  // const [fabricDetails, setFabricDetails] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedFabrics = [
      event.target.fabric1.value,
      event.target.fabric2.value,
      event.target.fabric3.value,
    ];

    const fabricDetails = [];

    selectedFabrics.forEach((fabric) => {
      Api.getFabricInfo(fabric).then((res) => {
        fabricDetails.push(res);
      });
    });

    console.log(fabricDetails);
  };

  return (
    <section className="page">
      <FabricCheckerForm handleSubmit={handleSubmit} />
    </section>
  );
};

export default FabricChecker;
