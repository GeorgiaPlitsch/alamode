import * as Api from "../../Api/Api.js";
import FabricPageHero from "../../components/FabricPageHero/FabricPageHero.js";
import FabricCheckerForm from "../../components/FabricCheckerForm/FabricCheckerForm";
import FabricCheckerResults from "../../components/FabricCheckerResults/FabricCheckerResults";
import FabricCheckerAdvice from "../../components/FabricCheckerAdvice/FabricCheckerAdvice.js";

import React, { useEffect, useState, useRef } from "react";

const FabricChecker = () => {
  const [fabrics, setFabrics] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);

  const contentDivRef = useRef();

  const handleClick = () => {
    contentDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    Api.getFabrics().then((result) => {
      setFabrics(result);
    });
  }, []);

  const handleSubmit = (formFabrics) => {
    const selected = fabrics.filter((fabric) => {
      return formFabrics.includes(fabric.name);
    });

    setSelectedFabrics(selected);
  };

  return (
    <section className="page">
      <FabricPageHero buttonClick={handleClick} />
      <FabricCheckerForm
        refProp={contentDivRef}
        handleSubmit={handleSubmit}
        fabrics={fabrics}
      />

      <FabricCheckerResults fabricDetails={selectedFabrics} />
      <FabricCheckerAdvice />
    </section>
  );
};

export default FabricChecker;
