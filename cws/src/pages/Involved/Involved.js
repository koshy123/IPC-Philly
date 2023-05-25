import "./involved.css";
import  Brand  from "./brand/Brand.jsx";
import  {WhatIPC}  from "../../Slider";

const Involved = () => {
  const scrollToWhatIPC = () => {
    const element = document.getElementById("what-ipc");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="involved">
      <div className="involved_header">
        <a href="#ipc" ><button  >Sunday Service Times</button></a>
      </div>
      <Brand />
      <div id="ipc">
      <WhatIPC />
      </div>
    </div>
  );
};

export default Involved;