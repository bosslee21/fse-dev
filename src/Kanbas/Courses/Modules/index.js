import ModuleList from "./ModuleList";


import { AiOutlineImport } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";

function Modules() {
  return (
    <div className="col-9 col-lg-10 d-none d-sm-block" style={{ paddingLeft: 0, overflow: "hidden" }}>
      <div className="row">

        <div className="col d-flex  justify-content-md-center ">
          <button className="btn btn-secondary opacity-60" style={{ marginBottom: '2px', marginRight: 2 }}>
            Collapse All
          </button>
          <button className="btn btn-secondary opacity-60" style={{ marginBottom: '2px', marginRight: 2 }}>
            View Progress
          </button>
          <button className="btn btn-secondary opacity-60" style={{ marginBottom: '2px', marginRight: 2 }}>
            <BiCheckCircle style={{ color: 'green' }} /> Publish All
          </button>
          <button className="btn btn-danger opacity-20" style={{ marginBottom: '2px' }}>
            <AiOutlineImport className="wd-incon" /> Module
          </button>

          <button className="btn btn-secondary opacity-10" style={{ marginBottom: '2px' }}> <BsThreeDotsVertical /> </button>

        </div>
        <ModuleList />




      </div>
    </div>
  );
}
export default Modules;