import { useSelector,useDispatch } from "react-redux";
import { onChnageSidebarStatus } from "../store";
import {PiArrowRightBold} from "react-icons/pi";
import {IoIosArrowUp} from "react-icons/io";
import {useEffect,useState} from "react";
import "../css/sidebar.css";
import catgArr from "../data/navbarData";
import { BuiltQueryMethods } from "@testing-library/react";

function Sidebar(){
    const dispatch = useDispatch();
    const sbStatus = useSelector((state : { sidebarStatus : string })=>{
        return state.sidebarStatus;
    })
    const contentBox = document.querySelectorAll(".sb-catgContentBox");
    const arrow =document.querySelectorAll(".sb-catgArrow");

    function closeSidebar(){
        dispatch(onChnageSidebarStatus(""))
        if(contentBox instanceof NodeList && arrow instanceof NodeList){
            for(let i = 0; i < contentBox.length; i++){
                    contentBox[i].classList.remove("openCatg");
                    arrow[i].classList.remove("selectArrow");
                }
            }
        }        
    

    return <div className={`sb-wrap ${sbStatus}`}>
                <div className="sb-closeBtn">
                    <div onClick={()=>{closeSidebar()}}><PiArrowRightBold /></div>                
                </div>
                <div className="sb-contentBox">
                        {catgArr.map((data,index)=>{
                            return <Accordian data={data} index={index} contentBox = {contentBox} arrow={arrow}/>
                        })}
                    </div>
            </div> 
}

export default Sidebar;

function Accordian({data,index,contentBox,arrow} : {data : {name : string, path:string, dropdownMenu : string[]},index :number , contentBox : NodeListOf<Element> , arrow : NodeListOf<Element> }){

    function AccOpen(index : number){
        if(contentBox instanceof NodeList && arrow instanceof NodeList){
            for(let i = 0; i < contentBox.length; i++){
                if(i === index){
                    contentBox[i].classList.toggle("openCatg");
                    arrow[i].classList.toggle("selectArrow");
                }else{
                    contentBox[i].classList.remove("openCatg");
                    arrow[i].classList.remove("selectArrow");
                }
            }
        }        
    }


    return  <div>
                <div className="sb-catgBox" onClick={()=>{AccOpen(index)}}>
                    <div className="sb-catgName">{data.name}</div>
                    <div className="sb-catgArrow"><IoIosArrowUp/></div>
                </div>
                <div className="sb-catgContentBox">
                </div>
            </div>
}

