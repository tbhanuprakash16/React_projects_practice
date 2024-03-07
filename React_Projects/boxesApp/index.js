const Box = (props) => {
  const { boxText, className } = props;
  return (
    <div className={`box-item ${className}`}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  <div className="boxes-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxText="Small" className="small-box" />
      <Box boxText="Medium" className="medium-box" />
      <Box boxText="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
