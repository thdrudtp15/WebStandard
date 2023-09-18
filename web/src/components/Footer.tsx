import "../css/footer.css";
import "../css/boxTemplate.css"
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import navbarData from "../data/navbarData"

function Footer(){


    return <div>
            <div className="footer-wrap">
                <div className="footer-catgBtnBox">
                {navbarData.map((data,index)=>{
                    return <div key={index} className="footer-catgBtn"><a  href={`${data.path}`}>{data.name}</a></div>
                })}
                </div>
                <div className="footer-explanationBox">
                    만든이 : 송경세
                </div>
            </div>
        </div>
        
}


export default Footer;