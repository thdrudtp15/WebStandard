
import React, { useEffect, useState } from "react";
import "../css/ImgSlide.css"
import {LiaLongArrowAltRightSolid} from "react-icons/lia";

import city from "../Image/city.jpg";
import space from "../Image/section1.jpg";
import beach from "../Image/beach.jpg";



function Banner() {

    //==============================
    //원하는 이미지 추가 시 imgArr에 추가하면
    //자동으로 다이렉트 버튼과 슬라이드박스의 크기가 늘어납니다.
    //조금 더 간편한 이미지 유지보수를 위해 해당 방법으로 제작했습니다.
    //==============================
    let [imgArr,setImgArr] = useState([ {main : "TITLE", sub : "explanation explanation explanation explanation explanation explanation " ,image : city, },                                  
                                        {main : "TITLE2", sub : "explanation explanation explanation explanation explanation explanation ", image : beach}
                                    ]);
    let [nowPage, setNowPage]  = useState(0);
    let [firstRendering , setFirstRendering] = useState(true);



    useEffect(()=>{
        //======================================
        //이미지 슬라이더의 크기를 결정하는 부분 
        //배열의 개수로 width값을 정하여
        //배열에 값만 추가해준다면 자동으로 width값 계산
        //======================================
        const boxTag = document.querySelector("#slider-box");
            if(boxTag instanceof HTMLElement){
                boxTag.style.width = `${imgArr.length}00%`
            }
        const sliderImgTag = document.querySelectorAll(".slider-image");
            if(sliderImgTag instanceof NodeList){
                sliderImgTag.forEach((tag)=>{
                    if(tag instanceof HTMLElement){
                        tag.style.width = `${100 / imgArr.length}%`
                    }
                })
            }
    },[])




    useEffect(()=>{
        //=======================================================
        //nowPage State 값에 따라서 slider-box의 위치를 조정합니다.
        //=======================================================
        if(!firstRendering){
        if(nowPage >= 0 && nowPage < imgArr.length){
            let tag = document.querySelector("#slider-box");
            let tbtag = document.querySelectorAll(".slider-imgTextBox");

                if(tag instanceof HTMLElement && tbtag instanceof NodeList){
                    
                    tbtag.forEach((tag)=>{
                        tag.classList.add("aa");
                    })

                 const STO =  setTimeout(()=>{
                        let tag1 =tag as HTMLElement
                        tag1.style.transform = `translateX(-${(100 / imgArr.length) * (nowPage)}%)`
                        clearTimeout(STO)
                    },400)
                const STO2 = setTimeout(()=>{
                    tbtag.forEach((tag)=>{
                        tag.classList.remove("aa");
                    })
                    clearTimeout(STO2)
                },800)  
            }
            

        //=======================================================
        // 원하는 슬라이드의 페이지로 이동하는 다이렉트 버튼의 스타일을 조정하는 부분입니다.
        //=======================================================

            let drBtntags = document.querySelectorAll(".slider-directBtn");
            if(drBtntags instanceof NodeList){
                drBtntags.forEach((tag) => {
                    tag.classList.remove("directBtn-select");
                })
                const sltTag = drBtntags[nowPage];
                sltTag.classList.add("directBtn-select");
            }
        } 
    }
    setFirstRendering(false);
    },[nowPage])



    function onChangeNowPage( x : string) : void{
        if( x === "left"){
            if(nowPage > 0){
                setNowPage(prev => prev - 1);
            }
        }else {
            if(nowPage < imgArr.length - 1 ){
                setNowPage(prev => prev + 1);
            }
        }

    }

    function onChangeNowPageDr(index :number) : void {
        setNowPage(index);
    }


    return <div className="Is-wrap">
                    
                    
                    <div className="slider-seqBtnBox leftPosition">
                        <div className="slider-seqBtn" onClick={()=>{onChangeNowPage("left")}}>
                            <LiaLongArrowAltRightSolid/>
                        </div>
                    </div>   
                    <div className="slider-seqBtnBox rightPosition">
                        <div className="slider-seqBtn" onClick={()=>{onChangeNowPage("right")}}>
                            <LiaLongArrowAltRightSolid/>
                        </div>
                    </div>
                    
                
                <div className="slider-container">
                    <div className="slider-box" id="slider-box">
                        {imgArr.map((data,index)=>{
                            return <div key={index} className="slider-image">
                                        <div className="slider-imgTextBox">
                                            <div className="slider-imgTextMain">
                                                {data.main}
                                            </div>
                                            <div className="slider-imgTextSub">
                                               {data.sub}
                                            </div>
                                        </div>                                   
                                        <img alt="" src={data.image}></img>
                                   </div>
                        })}
                    </div>
                    <div className="slider-directBtnBox">
                        {imgArr.map((data,index)=> <div key={index} className={`slider-directBtn ${index === 0 && "directBtn-select"}`} onClick={()=>{onChangeNowPageDr(index)}}></div>)}
                    </div>
                </div>
                </div>
}

export default Banner;