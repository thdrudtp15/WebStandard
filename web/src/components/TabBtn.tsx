import "../css/boxTemplate.css";
import "../css/tabBtn.css";
import React, { useEffect, useState } from "react";
import tabBtnData from "../data/tabBtnData";


function TabBtn(){

   

    const [catg,setCatg] = useState<{name : string, catg:string}[]>
                                     ([{name : "1stTAB", catg : "자연"},
                                     {name : "2ndTAB" , catg : "도시"},
                                     {name :"3rdTAB" ,catg : "바다"}]);

    const [select , setSelect] = useState("자연");
    const [cut,setCut] = useState(3);
    const [sameCatgData, setSameCatgData] = useState<{}[]>([{}]);
    const [dataArr, setData] = useState<{}[]>([{}]);

    //================================
    //간단하게 내용을 담을 템플릿을 작성하여
    //생산성 및 일관성을 챙기기 위해 노력했습니다.
    //================================

    useEffect(()=>{
        const contentTab = document.querySelector(".tab-contentBox")
        if(contentTab instanceof HTMLElement){
            contentTab.classList.add("zeroOpacity");
            const STO = setTimeout(()=>{
                contentTab.classList.remove("zeroOpacity");
                clearTimeout(STO);
                let Data = tabBtnData.filter((data)=> data.catg === select);
                setSameCatgData(Data);
                setData(Data.slice(0,cut));
            },300)
        }  
    },[select,cut])


    function onChangeCatg(x : string, n :number){
        const tabTag = document.querySelectorAll(".tab-btn");

        if(tabTag instanceof NodeList){
            const tab = tabTag;
            for(let i = 0; i < tabTag.length; i++){
                if(n === i){
                    tab[i].classList.add("tab-select");
                }else {
                    tab[i].classList.remove("tab-select");
                }
            }
        }
        setSelect(x);
        setCut(3);
    }
    
    function onMoreData(){
        setCut(prev => prev+3);
    }

    
    return <div className="template-wrap">
                <div className="template-subject">TAB BUTTON</div>
                <div className="template-contentBox">
                   
                    <div className="tab-btnBox">
                        {catg.map((data,index)=> 
                        <div key={index} className="tab-btn" onClick={()=>{onChangeCatg(data.catg, index)}}>
                            {data.name}
                        </div>)}
                    </div>
                    <TabCard  array={dataArr}/>
                    {sameCatgData.length > cut && <div className="moreBtnBox"><button className="moreBtn" onClick={()=>{onMoreData()}}>더보기</button></div>}
                </div>
           </div>
}

export default TabBtn;


function TabCard({array} : {array : {title?:string,img?:string,catg?:string}[]} ) {
    return <div className="tab-contentBox">
                    {array.map((data,index)=>
                    <div className="tab-content" key={index}>
                        <div className="tab-card">
                            <div className="tab-cardImg">
                                <img src={data.img} alt=""/>
                            </div>
                            <div className="tab-cardTitle">
                                <div className={`tab-badge ${data.catg === "자연" && "nature"}  ${data.catg ==="도시" && "city"} ${data.catg === "바다" && "sea"}`}>{data.catg}</div>
                            <div>{data.title}</div>
                            </div>
                        </div>
                    </div>
                    )}
           </div>
}