import SubmitButton from "../SubmitButton/SubmitButton";
import "./FabricCheckerForm.scss";

const FabricCheckerForm = (props) => {
  return (
    <section className="checker">
      <h3 className="checker__heading">
        Enter the fabric composition of an item below:
      </h3>
      <form className="checker__form" onSubmit={props.handleSubmit}>
        <input
          className="checker__form-input"
          type="text"
          name="fabric1"
          placeholder="Select fabric"
          list="fabricname"
        ></input>
        <datalist id="fabricname">
          <option value="Acetate" id="IdPlaceholder">
            Acetate
          </option>
          <option value="Cotton">Cotton</option>
          <option value="Cupro">Cupro</option>
        </datalist>

        <input
          className="checker__form-input"
          type="text"
          name="fabric2"
          placeholder="Select fabric"
          list="fabricname"
        ></input>
        <datalist id="fabricname">
          <option value="Acetate">Acetate</option>
          <option value="Cotton">Cotton</option>
          <option value="Cupro">Cupro</option>
        </datalist>

        <input
          className="checker__form-input"
          type="text"
          name="fabric3"
          placeholder="Select fabric"
          list="fabricname"
        ></input>
        <datalist id="fabricname">
          <option value="Acetate">Acetate</option>
          <option value="Cotton">Cotton</option>
          <option value="Cupro">Cupro</option>
        </datalist>
        <SubmitButton type="button" text="CHECK" />
      </form>
    </section>
  );
};

export default FabricCheckerForm;
