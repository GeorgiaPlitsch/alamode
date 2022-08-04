import * as Api from "../../Api/Api.js";
import PageHero from "../../components/PageHero/PageHero.js";
import FabricCheckerForm from "../../components/FabricCheckerForm/FabricCheckerForm";
import FabricCheckerResults from "../../components/FabricCheckerResults/FabricCheckerResults";

import React, { useEffect, useState } from "react";

const FabricChecker = () => {
  const [fabrics, setFabrics] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);

  useEffect(() => {
    Api.getFabrics().then((result) => {
      setFabrics(result);
    });
  }, []);

  console.log(fabrics);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fabricsFromForm = [
      event.target.fabric1.value,
      event.target.fabric2.value,
      event.target.fabric3.value,
    ];

    const selected = fabrics.filter((fabric) => {
      return fabricsFromForm.includes(fabric.name);
    });

    setSelectedFabrics(selected);
  };

  return (
    <section className="page">
      <PageHero />
      <FabricCheckerForm handleSubmit={handleSubmit} />
      <FabricCheckerResults fabricDetails={selectedFabrics} />
    </section>
  );
};

export default FabricChecker;
