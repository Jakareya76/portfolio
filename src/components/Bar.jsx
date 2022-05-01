const Bar = ({ name, classNames }) => {
  return (
    <div className="bar">
      <div className="info">
        <span className="uppercase">{name}</span>
      </div>
      <div className={`progress-line ${classNames}`}>
        <span></span>
      </div>
    </div>
  );
};

export default Bar;
