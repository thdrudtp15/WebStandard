import "../css/sectionTemplate.css";


function Section({ img, subject,text,fontColor } : {img : string , subject : string ,text : string, fontColor : string}){
    return <div className="section-wrap">
        <div className="section-textBox" style={{color : fontColor}}>
                    <div className="section-subject">{subject}</div>
                    <p className="section-text">{text}</p>
                </div>
                <img alt="" src={img} className="section-img"/>
            </div>
}

export default Section;