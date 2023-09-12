
class Catg {
    name : string;
    path : string;
    dropdownMenu : string[];
    constructor(name : string, path:string, drop : string[]){
        this.name = name;
        this.path = path;
        this.dropdownMenu =  drop;
    }
}




const catgArr = [
    new Catg("TAB","#tab",["TAB CONTETN1","TAB CONTETN2"]),
    new Catg("HOVER","#hover",["HOVER CONTETN1","HOVER CONTETN2"]),
    new Catg("ANIMATION","#ani",["ANI CONTETN1","ANI CONTETN2"]),
    new Catg("CLICK","#click",["ANI CONTETN1","ANI CONTETN2","ANI CONTENT3"]),
]

export default catgArr;