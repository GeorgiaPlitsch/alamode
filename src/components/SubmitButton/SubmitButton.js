import "./SubmitButton.scss";

const SubmitButton = (props) => {
  return (
    <>
      <button className="button" onClick={props.onClick}>
        <h4 className="button__text">{props.text}</h4>
      </button>
    </>
  );
};

export default SubmitButton;
