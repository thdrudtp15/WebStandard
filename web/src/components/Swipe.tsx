import "../css/swipe.css";
import { useEffect, useState } from "react";

function Swipe(){

    let obj = { name : "123"}
    let itemArr = [obj,obj,obj,obj,obj,obj,obj];
    //=====스와이프 기능에 필요한 부분들==================
    let [boxWidth,setBoxWidth] = useState(0); 
    let [swipeLimit,setSwipeLimit] = useState(0);
    let mouse = false;
    let start = 0;
    let now = 0;
    let a = 0;
    //==================================================

    useEffect(()=>{
        const boxTag = document.querySelector(".swipe-box");
        const contentTag =  document.querySelector(".swipe-content");
        
        if(boxTag instanceof HTMLElement && contentTag instanceof HTMLElement){
            setSwipeLimit(boxTag.offsetWidth - contentTag.offsetWidth);
            setBoxWidth(boxTag.offsetWidth);

        }



        function resize () {
            if(contentTag instanceof HTMLElement && boxTag instanceof HTMLElement){
                setSwipeLimit(boxTag.offsetWidth - contentTag.offsetWidth);
            }
        }

        window.addEventListener("resize",resize)
        return ()=>{
        window.removeEventListener("resize",resize)
        }

    },[])

    function onMouseDown (e : React.MouseEvent) {
        start = e.clientX;
        mouse = true;
    }
   
    function onMouseMove(e: React.MouseEvent) {
        if (mouse === true) {
            const boxTag = document.querySelector(".swipe-box");
            if (boxTag instanceof HTMLElement) {
                const deltaX = e.clientX - start;
                const newTranslateX = now + deltaX;
                console.log(newTranslateX);
                    boxTag.style.transform = `translateX(${newTranslateX}px)`;
                    a = newTranslateX;
            }
        }
    }

    function onMouseUp(e : React.MouseEvent) {
        const boxTag = document.querySelector(".swipe-box");
        if(boxTag instanceof HTMLElement){
        if(a > 0 ){
            boxTag.style.transform = `translateX(0px)`;
            now = 0;
        } else {
            now = a;
        }
        if(a < -swipeLimit){
            console.log(swipeLimit);
            boxTag.style.transform = `translateX(-${swipeLimit}px)`;
            now = -swipeLimit;
        }
        }
        mouse = false;
    }





    return <div className="template-wrap swipe-wrap" id="swipe">
                <div className="template-subject">SWIPE</div>
                <div className="template-contentBox  swipe-cWrap">
                    <div className="swipe-content">

                        <div className="swipe-box" onMouseDown={(e)=>{onMouseDown(e)}} onMouseUp={(e)=>{onMouseUp(e)}} onMouseMove={(e)=>{onMouseMove(e)}}>
                            {itemArr.map((data,index)=>{
                                return <SwipeCard key={index} index={index} />
                            })}
                        </div>

                    </div>
                </div>
                <div className="swipe-progressBox">
                            <div className="swipe-progress"></div>
                        </div>
           </div>
}

export default Swipe;

function SwipeCard ({key,index} : { key : number,index : number}) {
    return <div className="swipe-card">
            <div className="swipe-cardNum">{index}</div>
            {index}
            {/* {index < 10 ? "0"+(index+1).toString() : index} */}

    </div>
}

