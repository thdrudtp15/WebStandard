
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
    new Catg("OVERLAY","#overlay",["OVERLAY CONTETN1","OVERLAY CONTETN2"]),
    new Catg("STICKY","#sticky",["STICKY CONTETN1","STICKY CONTETN2"]),
    new Catg("SWIPE","#swipe",["SWIPE CONTETN1","SWIPE CONTETN2","SWIPE CONTENT3"]),
]

export default catgArr;