import "../css/navbar.css";


function Navbar(){

    const catgArr = [
        {name : "TAB" , path : "#tab" , dropdownMenu : ["TAB CONTENT1","TAB CONTENT2"]},
        {name : "HOVER" , path : "#hover" , dropdownMenu : ["HOVER CONTENT1","HOVER CONTENT2"]},
        {name : "ANIMATION" , path : "#animation" , dropdownMenu : ["ANI CONTENT1","ANI CONTENT2"]},
    ]



    return <div className="nav-wrap">
            <div className="nav-logoBox">HOME</div>
            <div className="nav-catgBox">
                {catgArr.map((data,index)=>{
                    return <NavCatg data={data}/>
                })}
            </div>
        </div>
}

export default Navbar;


function NavCatg({data} : {data : {name : string , path : string , dropdownMenu : string[]}}){
    return <div className="nav-catg" >
    <a href={`${data.path}`} className="nav-catgText">{data.name}</a>
    <div className="nav-dropdownBox">
        {data.dropdownMenu.map((menu,index)=>{
             return <div key={index} className="nav-dropdown">{menu}</div>
        })}

    </div>
</div>
}