import SubmitButton from "../SubmitButton/SubmitButton";

const FabricCheckerForm = (props) => {
  return (
    <section className="checker">
      <h2>Clothing fabric composition checker</h2>
      <h3>
        Input the composition of a clothing item here to find further details
        and advice on the sustainibility of the product...
      </h3>

      <form onSubmit={props.handleSubmit}>
        <input
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
