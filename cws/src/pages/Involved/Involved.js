import "./involved.css";
import  {Brand}  from "../../components";
import  {WhatIPC}  from "../../containers";

const Involved = () => {
  const scrollToWhatIPC = () => {
    const element = document.getElementById("what-ipc");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="involved">
      <div className="involved_header">
        <h1 >Get Involved</h1>
        <a href="#ipc" ><button  >Sunday Service</button></a>
      </div>
      <Brand />
      <div id="ipc">
      <WhatIPC />
      </div>
    </div>
  );
};

export default Involved;