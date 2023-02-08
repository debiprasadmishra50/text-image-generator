import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner" style={{ margin: "auto", position: "relative" }}>
      <div className="loader"></div>
    </div>
  );
};

// Default Properties in props
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
