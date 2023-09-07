import "../css/footer.css";
import "../css/boxTemplate.css"
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

function Footer(){

    

    //화면 끝까지 내리면 footer 전개하는 걸로
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

    return <div>
        <div style={{height : "200px"}}></div> 
        <div className="footer-wrap">
            푸터 내용채우기 마지막에 해도 될듯
        </div>
        </div>
        
}


export default Footer;