const FabricCheckerForm = (props) => {
  return (
    <section className="checker">
      <h2>Clothing fabric composition checker</h2>
      <h3>
        Input the composition of a clothing item here to find further details
        and advice on the sustainibility of the product...
      </h3>

      <form>
        <input
          type="text"
          name="fabric"
          placeholder="Select fabric"
          list="fabricname"
        ></input>
        <datalist id="fabricname">
          <option value="Acetate">Acetate</option>
          <option value="Cotton">Cotton</option>
        </datalist>

        <input
          type="text"
          name="fabric"
          placeholder="Select fabric"
          list="fabricname"
        ></input>
        <datalist id="fabricname">
          <option value="Acetate">Acetate</option>
          <option value="Cotton">Cotton</option>
        </datalist>

        <input
          type="text"
          name="fabric"
          placeholder="Select fabric"
          list="fabricname"
        ></input>
        <datalist id="fabricname">
          <option value="Acetate">Acetate</option>
          <option value="Cotton">Cotton</option>
        </datalist>
      </form>

      {/* <button type="button" onClick={props.handleSubmit} text="CHECK" /> */}
    </section>
  );
};

export default FabricCheckerForm;
