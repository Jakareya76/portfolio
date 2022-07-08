import { ReactComponent as Html } from "../../assets/svg/html.svg";
import { ReactComponent as Css } from "../../assets/svg/css-3.svg";
import { ReactComponent as Javascript } from "../../assets/svg/javascript.svg";
import { ReactComponent as React } from "../../assets/svg/react.svg";
import { ReactComponent as Node } from "../../assets/svg/node-js.svg";
import { ReactComponent as Tailwind } from "../../assets/svg/tailwind.svg";
import "./CubeSpinner.css";

const CubeSpinner = () => {
  return (
    <div className="cubespinner">
      <div className="face1">
        <Html fill="#DE4839" width="130px" height="130px" />
      </div>
      <div className="face2">
        <Css fill="#3944F7" width="130px" height="130px" />
      </div>
      <div className="face3">
        <Javascript width="150px" height="150px" />
      </div>
      <div className="face4">
        <React fill="#12B0E8" width="130px" height="130px" />
      </div>
      <div className="face5">
        <Node width="200px" height="200px" />
      </div>
      <div className="face6">
        <Tailwind width="220px" height="220px" />
      </div>
    </div>
  );
};

export default CubeSpinner;
