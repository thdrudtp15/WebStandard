import "../css/sticky.css";



import { useEffect } from "react";
import { useSelector } from "react-redux";

function Sticky() {
    return <div> 
                <Sticky1 />
                <Sticky2 />
                <div style={{height :2000,background : "white"}}></div>
    </div>
}

export default Sticky;

//정적 sticky
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

function Sticky2 (){

    class SC {
        name : string;
        exp : string;
        img : string;
        constructor(n : string, e : string, i : string){
            this.name = n;
            this.exp = e;
            this.img = i
        }
    }

    let arr= [new SC("NEON","설명","https://i.esdrop.com/d/f/2DJRPYKvvz/zEbDre6vGG.jpg"),
              new SC("CITY","설명","https://i.esdrop.com/d/f/2DJRPYKvvz/a3jl6MaJhb.jpg"),
              new SC("LIGHT","설명","https://i.esdrop.com/d/f/2DJRPYKvvz/uBqzFtFoMy.jpg"),
              new SC("ART","설명","https://i.esdrop.com/d/f/2DJRPYKvvz/HvKrhWjk5S.jpg")];


    return  <div className="sticky-secondWrap">
                <div className="sticky-pointer secondPointer">
                    <div className="sticky-secondTextBox">
                        <div className="sticky-secondHeader"><span>MAKE_._</span></div>
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