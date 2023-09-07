
import { useEffect } from "react";

//==========================
//해당 컴포넌트는 아무런 태그도 반환하지 않습니다.
//오직 스크롤 이벤트 코드만을 담은 컴포넌트입니다.
//유지보수에 헷갈림이 있을 수 있지만, 잦은 useEffect 호출을 막고싶어 
//생각하게 되었습니다.
//==========================
function ScrollEvent(){

    useEffect(()=>{
            const footerWrapTag = document.querySelector(".footer-wrap")
            const navWrapTag = document.querySelector(".nav-wrap");


        function resizingEvent(){
            let width = document.body.offsetWidth;
            if(width <= 768 && navWrapTag instanceof HTMLElement){
                navWrapTag.classList.remove("nav-fold")
            }
        }



        function scrollEvnt(){
            let scroll = window.scrollY; //내가 내린 수치
            let view = window.innerHeight; //보여지는 화면의 크기
            let height =document.body.scrollHeight;//전체 화면의 높이
            let width = document.body.offsetWidth;
            let percent = scroll / (height - view) * 100;
            
            
                if(footerWrapTag instanceof HTMLElement && navWrapTag instanceof HTMLElement) {
                    if(percent > 3 && width > 768) {
                        navWrapTag.classList.add("nav-fold")
                    }else{
                        navWrapTag.classList.remove("nav-fold")
                    }

                    if(percent > 97) {
                        footerWrapTag.classList.add("footer-expand");
                    }else {
                        footerWrapTag.classList.remove("footer-expand");
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