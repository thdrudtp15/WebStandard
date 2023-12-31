import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onChnageSidebarStatus } from "../store";


//==========================
//해당 컴포넌트는 아무런 태그도 반환하지 않습니다.
//오직 스크롤 이벤트 코드만을 담은 컴포넌트입니다.
//유지보수에 헷갈림이 있을 수 있지만, 잦은 useEffect 호출을 막고싶어 
//생각하게 되었습니다.
//==========================
function ScrollEvent(){
    const dispatch = useDispatch();
    let width : number = document.body.offsetWidth;
    let limitValue = 0;
    console.log(width,"d");
    console.log(limitValue,"df");
    useEffect(()=>{
            const navWrapTag = document.querySelector(".nav-wrap");
            const wordBox = document.querySelectorAll(".wordBox");
            const slideBox = document.querySelector(".sticky-slideBox");


            //==============Sticky1의 활성화를 위해 필요한 부분====================
            //const stickyImg = document.querySelector(".sticky-bgImg");
            //const stickyFirstWrap = document.querySelector(".sticky-firstWrap");
            //===================================================================
            
            
            //==================가로형 스티키를 위한 부분
            const 태그 = document.querySelector(".sticky-secondWrap");
            const 세컨드포인터 = document.querySelector(".sticky-slideBox");
            //=========================================
            
            if(slideBox instanceof HTMLElement){
            if(width > 576){
                limitValue = -slideBox.offsetWidth * 0.71;
            }else {
                limitValue = -slideBox.offsetWidth * 0.73;
            }   
        }

        function resizingEvent(){
            width = document.body.offsetWidth;
            if(width <= 768 && navWrapTag instanceof HTMLElement){
                navWrapTag.classList.remove("nav-fold")   
            }else if(width >= 768){
                dispatch(onChnageSidebarStatus(""))
            }

            //Sticky2의 limit조정 부분
            if(slideBox instanceof HTMLElement){
                if(width > 576){
                    limitValue = -slideBox.offsetWidth * 0.68;
                }else {
                    limitValue = -slideBox.offsetWidth * 0.73;
                }   
            }
        }



        function scrollEvnt(){
            let scroll = window.scrollY; //내가 내린 수치
            let view = window.innerHeight; //보여지는 화면의 크기
            let height =document.body.scrollHeight;//전체 화면의 높이
            let width1 = document.body.offsetWidth;
            let percent = scroll / (height - view) * 100;
           
                if(navWrapTag instanceof HTMLElement && 태그 instanceof HTMLElement) {
                    //========Sticky1활성화를 위해 필요한 부분======
                    //stickyImg instanceof HTMLElement && wordBox instanceof NodeList && stickyFirstWrap instanceof HTMLElement
                    //============================================     



                    //nav-bar
                    if(percent > 3 && width1 > 768) {
                        navWrapTag.classList.add("nav-fold")
                    }else{
                        navWrapTag.classList.remove("nav-fold")
                    }

                    for(let i = 0; i < wordBox.length; i++){
                        wordBox[i].classList.remove("spotlight");
                    }

                    //Sticky1
                    // let sticky1Top =stickyFirstWrap.getBoundingClientRect().top;
                    // if( sticky1Top < -500 && sticky1Top > -1000){
                    //     stickyImg.classList.remove("img1");
                    //     stickyImg.classList.remove("img3");
                    //     stickyImg.classList.add("img2");
                    //     wordBox[1].classList.add("spotlight");
                    // }else if ( sticky1Top < -1000 ){
                    //     stickyImg.classList.remove("img1")
                    //     stickyImg.classList.remove("img2")
                    //     stickyImg.classList.add("img3");
                    //     wordBox[2].classList.add("spotlight");
                    // } else {
                    //     stickyImg.classList.remove("img2");
                    //     stickyImg.classList.remove("img3");
                    //     stickyImg.classList.add("img1");
                    //     wordBox[0].classList.add("spotlight");
                    // }


                    //Sticky2
                    if(태그 instanceof HTMLElement && 세컨드포인터 instanceof HTMLElement) {
                        let 태그위치 = 태그.getBoundingClientRect().top;
                        if(태그위치 > limitValue && 태그위치 < -50){
                        
                                세컨드포인터.style.transform = `translateX(${태그위치}px)`
                        }else if (태그위치 > -50) {
                            세컨드포인터.style.transform = `translateX(-0px)`
                        }else if(태그위치 < limitValue){
                            세컨드포인터.style.transform = `translateX(${limitValue}px)`
                        }
                    }
                 

                }







        }
        window.addEventListener("resize",resizingEvent)
        window.addEventListener("scroll",scrollEvnt)
        return ()=>{
            window.removeEventListener("scroll",scrollEvnt)
            window.addEventListener("resize",resizingEvent)
    }
    },[])

    return <></>
}

export default ScrollEvent;