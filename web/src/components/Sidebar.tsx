import { useSelector,useDispatch } from "react-redux";
import { onChnageSidebarStatus } from "../store";
import { onchangeLoginStatus } from "../store";
import {PiArrowRightBold} from "react-icons/pi";
import {IoIosArrowUp} from "react-icons/io";
import {SlLogin} from "react-icons/sl";
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
    const catgBox = document.querySelectorAll(".sb-catgBox");




    function closeSidebar(){
        dispatch(onChnageSidebarStatus(""))
        if(contentBox instanceof NodeList && arrow instanceof NodeList && catgBox instanceof NodeList){
            for(let i = 0; i < contentBox.length; i++){
                    contentBox[i].classList.remove("openCatg");
                    arrow[i].classList.remove("selectArrow");
                    catgBox[i].classList.remove("selectCatg");
                }
            }
        }        
    
    function onLogin(){
        dispatch(onChnageSidebarStatus(""))
        const STO = setTimeout(()=>{
            dispatch(onchangeLoginStatus("login-wrapActivate"))
            clearTimeout(STO);
        },100)
    }



    return <div className={`sb-wrap ${sbStatus}`}>
                <div className="sb-closeBtn">
                    <div onClick={()=>{closeSidebar()}}> <PiArrowRightBold /></div>                
                </div>
                <div className="sb-contentBox">
                        <div className="sb-login" onClick={()=>{onLogin()}}>
                            <div className="sb-catgName">로그인<span className="sb-loginIcon"><SlLogin/></span></div>
                        </div>
                        {catgArr.map((data,index)=>{
                            return <Accordian data={data} index={index} contentBox = {contentBox} arrow={arrow} catgBox = {catgBox}/>
                        })}
                </div>
            </div> 
}

export default Sidebar;

function Accordian({data,index,contentBox,arrow,catgBox} : {data : {name : string, path:string, dropdownMenu : string[]},index :number , contentBox : NodeListOf<Element> , arrow : NodeListOf<Element> ,catgBox : NodeListOf<Element> }){

    function AccOpen(index : number){
        if(contentBox instanceof NodeList && arrow instanceof NodeList && catgBox instanceof NodeList){
            for(let i = 0; i < contentBox.length; i++){
                if(i === index){
                    contentBox[i].classList.toggle("openCatg");
                    arrow[i].classList.toggle("selectArrow");
                    catgBox[i].classList.toggle("selectCatg");
                }else{
                    contentBox[i].classList.remove("openCatg");
                    arrow[i].classList.remove("selectArrow");
                    catgBox[i].classList.remove("selectCatg");
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
                    {data.dropdownMenu.map((data,index)=>{
                        return <div key={index} className="sb-catgContent"><span>{data}</span></div>
                    })}
                </div>
            </div>
}

