import { useSelector,useDispatch } from "react-redux";
import { onChnageSidebarStatus } from "../store";
import {PiArrowRightBold} from "react-icons/pi";
import "../css/sidebar.css";

function Sidebar(){
    const dispatch = useDispatch();
    const sbStatus = useSelector((state : { sidebarStatus : string })=>{
        return state.sidebarStatus;
    })


    return <div className={`sb-wrap ${sbStatus}`}>
                <div className="sb-closeBtn">
                    <div onClick={()=>{dispatch(onChnageSidebarStatus(""))}}><PiArrowRightBold /></div>
                </div>
            </div> 
}

export default Sidebar;