const Bar = ({ name, classNames, isBarVisible }) => {
  return (
    <div className="bar">
      <div className="info">
        <span className="uppercase">{name}</span>
      </div>
      <div className={isBarVisible ? `progress-line ${classNames}` : ""}>
        <span></span>
      </div>
    </div>
  );
};

export default Bar;
