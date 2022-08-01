const SubmitButton = (props) => {
  return (
    <button className="button">
      <h4 className="button__text">{props.text}</h4>
    </button>
  );
};

export default SubmitButton;
