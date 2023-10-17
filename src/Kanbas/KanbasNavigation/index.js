import { Link, useLocation } from "react-router-dom";
import {RiAccountCircleLine} from "react-icons/ri";
import {TfiDashboard} from  "react-icons/tfi";
import {BiSolidBookBookmark} from "react-icons/bi";
import {BsCalendar3} from "react-icons/bs";
import {MdOutlineMoveToInbox} from "react-icons/md";
import {GoHistory} from "react-icons/go";
import {SiAndroidstudio} from "react-icons/si";
import {HiMiniUserGroup} from "react-icons/hi2";
import {BiHelpCircle} from "react-icons/bi";
import "./index.css"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History","Studio", "Groups", "Help"];

//   Account: <FaUserAlt style={{fontSize: "2em"}}/>,
  const linkToIconMap = {
    Account: <RiAccountCircleLine className="wd-icon"/>,
    Dashboard: <TfiDashboard className="wd-icon"/>, 
    Courses: <BiSolidBookBookmark className="wd-icon"/>,
    Calendar: <BsCalendar3 className="wd-icon"/>,
    Inbox: <MdOutlineMoveToInbox className="wd-icon"/>,
    History: <GoHistory className="wd-icon"/>,
    Studio: <SiAndroidstudio className="wd-icon"/>,
    Groups: <HiMiniUserGroup className="wd-icon"/>,
    Help: <BiHelpCircle className="wd-icon"/>,
  };
  
  // <Link to ="/Kanbas/Account"  -> put this into the url when it is clicked 
  const { pathname } = useLocation();

    return (
        <div className="wd-kanbas-navigation list-group d-none d-md-block" >
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {linkToIconMap[link]} <br/> 
            {link}
            
            </Link>
        ))}
        </div>
    );
}
export default KanbasNavigation;

