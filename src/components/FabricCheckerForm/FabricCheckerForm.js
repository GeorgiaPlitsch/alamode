import SubmitButton from "../SubmitButton/SubmitButton";
import "./FabricCheckerForm.scss";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const FabricCheckerForm = (props) => {
  const generateFabricInput = (value) => {
    return (
      <input
        className="checker__form-input"
        type="text"
        placeholder="Select fabric"
        list="fabricname"
        id={uuid()}
        value={value}
        onChange={onFabricChange}
      ></input>
    );
  };

  // TODO fix ai of fabric forms - disable typing - convert to <select> <option> element

  const onFabricChange = (event) => {
    setSelectedFabrics((current) => [...current, event.target.value]);
    setFabricInputs((current) => [...current, generateFabricInput()]);
  };

  const onSubmit = () => {
    props.handleSubmit(selectedFabrics);
  };

  const [fabricInputs, setFabricInputs] = useState([generateFabricInput()]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);

  const fabricNames = props.fabrics.map((fabric) => {
    return fabric.name;
  });

  const fabricOptions = fabricNames
    .filter((fabric) => {
      return !selectedFabrics.includes(fabric);
    })
    .map((fabric) => {
      return <option value={fabric}></option>;
    });

  return (
    <section ref={props.refProp} className="checker">
      <h3 className="checker__heading">
        Enter the fabric composition of an item below:
      </h3>
      <div className="checker__form">
        {fabricInputs}
        <datalist id="fabricname">{fabricOptions}</datalist>
        <SubmitButton type="button" text="CHECK" onClick={onSubmit} />
        <p className="checker__form-link"> Don't see a fabric? Tell us here</p>
      </div>
    </section>
  );
};

export default FabricCheckerForm;
