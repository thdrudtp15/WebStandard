import "../css/navbar.css";
import React,{useEffect} from "react"

import { useDispatch,useSelector } from "react-redux";
import { onchangeLoginStatus } from "../store";
import { onChnageSidebarStatus } from "../store";
import catgArr from "../data/navbarData";
import {HiBars3} from "react-icons/hi2";

function Navbar(){

    const dispatch = useDispatch();
    
    return <div className="nav-wrap">
            <div className="nav-logoBox">HOME</div>
            <div className="nav-catgBox">
                {catgArr.map((data,index)=>{
                    return <NavCatg data={data}/>
                })}
                <div className="nav-catg" onClick={()=>{dispatch(onchangeLoginStatus("login-wrapActivate"))}}>
                    <span className="nav-catgText" onClick={()=>{dispatch(onchangeLoginStatus("login-wrapActivate"))}}>LOGIN</span>
                </div>
            </div>
            <div className="nav-flexableIcon" onClick={()=>{dispatch(onChnageSidebarStatus("sb-open"))}}>
                <HiBars3 />
            </div>
        </div>
}

export default Navbar;


function NavCatg({data} : {data : {name : string , path : string , dropdownMenu : string[]}}){
    return <a className="nav-catg" href={`${data.path}`} >
                 <span className="nav-catgText">{data.name}</span>
                 <div className="nav-dropdownBox">
                     {data.dropdownMenu.map((menu,index)=>{
                         return <div key={index} className="nav-dropdown">{menu}</div>
                        })}
                 </div>
           </a>
}

