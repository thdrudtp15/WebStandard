
import { useEffect } from "react";
function ScrollEvent(){

    useEffect(()=>{
        function scrollEvnt(){
            let scroll = window.scrollY; //내가 내린 수치
            let view = window.innerHeight; //보여지는 화면의 크기
            let height =document.body.scrollHeight;//전체 화면의 높이

            let percent = scroll / (height - view) * 100;
            
            const footerWrapTag = document.querySelector(".footer-wrap")
            const navWrapTag = document.querySelector(".nav-wrap");

                if(footerWrapTag instanceof HTMLElement && navWrapTag instanceof HTMLElement) {
                    if(percent > 3) {
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

        window.addEventListener("scroll",scrollEvnt)
        return ()=>{window.removeEventListener("scroll",scrollEvnt)}
    },[])

    return <></>
}

export default ScrollEvent;