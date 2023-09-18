import "../css/sticky.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import stickyData from "../data/stickyData";


function Sticky() {
    return <div> 
                {/* <Sticky1 /> */}
                <Sticky2 arr={stickyData} />
    </div>
}

export default Sticky;

//세로형 Sticky 비활성화
function Sticky1 (){
    return <div className="sticky-firstWrap">
                <div className="sticky-bg">
                     <div className="sticky-bgImg"> </div>
                </div>
                <div className="sticky-pointer firstPointer">
                        <div className="sticky-header">
                            VERTICAL
                        </div>
                        <div className="sticky-content">
                            함께 즐겨요 피자헛
                        </div>
                </div>
                <div className="sticky-noneBox">
                    <div className="wordBox firstWord">
                        <span className="word">B</span>
                        <span className="word E">E</span>
                    </div>
                    <div className="wordBox secondWord">
                        <span className="word">T</span>
                        <span className="word H">H</span>
                        <span className="word E2">E</span>       
                    </div>
                    <div className="wordBox thirdWord">
                        <span className="word">B</span>
                        <span className="word E3">E</span>
                        <span className="word S">S</span>
                        <span className="word T">T</span>
                    </div>
                </div>
            </div>


}

function Sticky2 ({arr} : {arr :  { name : string, exp:string, img:string }[] }){
    return  <div className="sticky-secondWrap" id="sticky">
                <div className="sticky-pointer secondPointer">
                    <div className="sticky-secondTextBox">
                    <div className="template-subject subject-custom">STICKY</div>
                        <div className="sticky-secondHeader"><span>_TITLE</span></div>
                        <div className="sticky-secondExplanation">EXPLANATIONS</div>
                    </div>
                    <div className="sticky-slideBox">
                        {arr.map((data,index)=>{
                            return <div className="sticky-slideContent" key={index}>
                                        <div className="sticky-slideTextBox">
                                            {data.name}
                                        </div>
                                        <img src={data.img} alt=""/>
                                   </div>
                        })}
                    </div>
                </div>
            </div>
}