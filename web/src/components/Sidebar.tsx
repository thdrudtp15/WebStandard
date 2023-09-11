import { useSelector,useDispatch } from "react-redux";
import { onChnageSidebarStatus } from "../store";
import {GrClose} from "react-icons/gr";
import "../css/sidebar.css";

function Sidebar(){
    const sbStatus = useSelector((state : { sidebarStatus : string })=>{
        return state.sidebarStatus;
    })


    return <div className={`sb-wrap ${sbStatus}`}>
                <div className="sb-closeBtn">
                    <div><GrClose /></div>
                </div>
            </div> 
}

export default Sidebar;