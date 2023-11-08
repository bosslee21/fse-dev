import ModuleList from "../Modules/ModuleList";

import { TiCancel } from "react-icons/ti";
import { AiOutlineImport } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCalendarPlus } from "react-icons/bs";
import "./index.css"

function Home() {



  return (
    <div className="col-9 col-lg-10 d-none d-sm-block" style={{ paddingLeft: 0, overflow: "hidden" }}>
      <div className="row">
        <div className="col-10 col-lg-9">
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
        <div className="col-2 col-lg-3 d-none d-md-block">
          <b>Course Status </b>
          <div class="d-flex flex-row" >
            <button type="button" class="btn btn-secondary opacity-50 btn-sm"><TiCancel className="wd-icon" /> Unpublished</button>
            <button type="button" class="btn btn-success opacity-75 btn-sm">Publish</button>

          </div>
          <div className="d-flex flex-column" style={{ marginBottom: '3px' }}>
            <button className="btn btn-secondary opacity-50" style={{ marginBottom: '2px', marginTop: '8px' }}>
              <AiOutlineImport className="wd-incon" /> Import Existing Content
            </button>
            <button className="btn btn-secondary opacity-50" style={{ marginBottom: '2px' }}>
              <BiImport className="wd-icon" /> Import From Common
            </button>
            <button className="btn btn-secondary opacity-50" style={{ marginBottom: '2px' }}>
              <AiFillHome className="wd-icon" /> Choose Home Page
            </button>
            <button className="btn btn-secondary opacity-50" style={{ marginBottom: '2px' }}>
              <BsGraphUp className="wd-icon" /> View Course Stream
            </button>
            <button className="btn btn-secondary opacity-50" style={{ marginBottom: '2px' }}>
              <BiNews className="wd-icon" /> New Announcement
            </button>
          </div>


          <div className="d-flex flex-column" style={{ marginTop: '10px' }}>
            <h6 style={{ marginTop: '0px' }}>Coming Up!</h6>
            <hr />
            <ul>
              <li>
                <a href="#" style={{ color: 'red' }}>
                  <BsCalendarPlus style={{ marginRight: 2 }} /> Lecture 5610 11:15PM
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'red' }}>
                  <BsCalendarPlus style={{ marginRight: 2 }} />Lecture 12:45
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'red' }}>
                  <BsCalendarPlus style={{ marginRight: 2 }} />Office Hour 11 PM
                </a>
              </li>
            </ul>
          </div>




        </div>



      </div>

    </div>


  );
}
export default Home;