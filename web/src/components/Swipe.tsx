import "../css/swipe.css";
import { useEffect, useState } from "react";
import itemArr from "../data/swipeData";

function Swipe(){   
    let [boxWidth,setBoxWidth] = useState(0); 
    let [swipeLimit,setSwipeLimit] = useState(0);
    let mouse = false;
    let start = 0;
    let now = 0;
    let a = 0;
    

    useEffect(()=>{
        const contentTag =  document.querySelector(".swipe-content");
        

        //화면이 어떤 크기로 켜질지 모르기 때문에 리밋을 동적으로 정해준다.
        const boxTag = document.querySelector(".swipe-box");
        const progressTag = document.querySelector(".swipe-progress");
        if(boxTag instanceof HTMLElement && contentTag instanceof HTMLElement){
            setSwipeLimit(boxTag.offsetWidth - contentTag.offsetWidth * 0.82);
            setBoxWidth(boxTag.offsetWidth);
        }


        //리사이징 할 때 마다 리밋을 정해주는 부분
        function resize () {
            if(contentTag instanceof HTMLElement && boxTag instanceof HTMLElement && progressTag instanceof HTMLElement){
                if(document.body.offsetWidth < 576){
                    setSwipeLimit(boxTag.offsetWidth - contentTag.offsetWidth * 0.76);//72
                }
                else{
                setSwipeLimit(boxTag.offsetWidth - contentTag.offsetWidth * 0.82);
                }
                boxTag.style.transform = `translateX(0px)`;
                progressTag.style.width = "0%";
                
            }
        }

        window.addEventListener("resize",resize)
        return ()=>{
        window.removeEventListener("resize",resize)
        }

    },[])

    function onMouseDown (e : React.MouseEvent) {
        const boxTag = document.querySelector(".swipe-box");
    
        if(boxTag instanceof HTMLElement){
            boxTag.classList.remove("swipe-transition");
        }
        start = e.clientX;
        mouse = true;
    }
   
    function onMouseMove(e: React.MouseEvent) {
        if (mouse === true) {
            const boxTag = document.querySelector(".swipe-box");
    
            if (boxTag instanceof HTMLElement) {
                const deltaX = e.clientX - start;
                const newTranslateX = now + deltaX;
                    boxTag.style.transform = `translateX(${newTranslateX}px)`;
                    a = newTranslateX;
            }
        }
    }

    function onMouseUp(e : React.MouseEvent) {
        const boxTag = document.querySelector(".swipe-box");
        const progressTag = document.querySelector(".swipe-progress");
        let prgpcnt = -a / swipeLimit * 100;
        if(boxTag instanceof HTMLElement && progressTag instanceof HTMLElement){
            boxTag.classList.add("swipe-transition");
        if(a > 0 ){
            boxTag.style.transform = `translateX(0px)`;
            progressTag.style.width = `0%`
            now = 0;
        } else if(a < -swipeLimit){
            boxTag.style.transform = `translateX(-${swipeLimit}px)`;
            progressTag.style.width = `100%`
            now = -swipeLimit;
        } else {
            progressTag.style.width = `${prgpcnt}%`
            now = a;
        }
        }
        mouse = false;
    }

    return <div className="template-wrap swipe-wrap" id="swipe">
                <div className="template-subject">SWIPE</div>
                <div className="template-contentBox  swipe-cWrap">
                    <div className="swipe-content">

                        <div className="swipe-box" onMouseDown={(e)=>{onMouseDown(e)}} onMouseUp={(e)=>{onMouseUp(e)}} onMouseMove={(e)=>{onMouseMove(e)}} onMouseLeave={(e)=>{onMouseUp(e)}}>
                            {itemArr.map((data,index)=>{
                                return <SwipeCard key={index} index={index} data={data} />
                            })}
                        </div>

                    </div>
                </div>
                <div className="swipe-progressBox">
                    <div className="swipe-progressBar">
                    <div className="swipe-progress"></div>
                    </div>
                </div>
           </div>
}

export default Swipe;

function SwipeCard ({key,index,data} : { key : number,index : number, data : {title : string, img:string}}) {
    return <div className="swipe-card">
            <div className="swipe-cardNum">{index < 10 ? "0"+(index+1).toString() : index}</div>
            <div className="swipe-cardTitle">{data.title}</div>
            <div className="swipe-cardImg">
                <img src={`${data.img}`} alt="" draggable={false}/>
            </div>
    </div>
}
