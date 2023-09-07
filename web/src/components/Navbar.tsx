import "../css/navbar.css";
import React,{useEffect} from "react"

import { useDispatch,useSelector } from "react-redux";
import { onchangeLoginStatus } from "../store";



function Navbar(){

    const dispatch = useDispatch();
    
    

    const catgArr = [
        {name : "TAB" , path : "#tab" , dropdownMenu : ["TAB CONTENT1","TAB CONTENT2"]},
        {name : "HOVER" , path : "#hover" , dropdownMenu : ["HOVER CONTENT1","HOVER CONTENT2"]},
        {name : "ANIMATION" , path : "#animation" , dropdownMenu : ["ANI CONTENT1","ANI CONTENT2"]},
    ]



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