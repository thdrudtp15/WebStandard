import "../css/boxTemplate.css";
import "../css/hover.css";

import React, { useEffect, useState } from "react";


import hover1 from "../Image/hover1.jpg";
import hover2 from "../Image/hover2.jpg";
import hover3 from "../Image/hover3.jpg";
import hover4 from "../Image/hover4.jpg";


function Hover(){


    const [hoverArr,setHoverArr] = useState<{img : string , name : string , epn : string}[]>
                                            ([
                                                {img : hover1 , name : "구름" , epn :"바다 사진입니다."},
                                                {img : hover2 , name : "해저" , epn :"바다 사진입니다."},
                                                {img : hover3 , name : "평원" , epn :"바다 사진입니다."},
                                                {img : hover4 , name : "지구" , epn :"바다 사진입니다."},

                                            ])



    //================================
    //간단하게 내용을 담을 템플릿을 작성하여
    //생산성 및 일관성을 챙기기 위해 노력했습니다.
    //================================
    return <div className="template-wrap" id="hover">
                <div className="template-subject">HOVER EVENT</div>
                <div className="template-contentBox">
                    <div className="hover-content">
                        {hoverArr.map((data,index)=>{
                            return <span key={index}> 
                                        <HoverCard data={data}/>
                                    </span> 
                        })}



                    </div>
                </div>
           </div>
}

export default Hover;


function HoverCard( {data} : { data : {img? : string , name? :string,  epn? :string }}){
    return   <div className="hover-cardBox">
                    <div className="hover-overlay">
                        <div>PHOTONAME : {data.name}</div>
                    </div>
                <div className="hover-card">
                    <img alt="" src={data.img}></img>
                </div>
</div>
}