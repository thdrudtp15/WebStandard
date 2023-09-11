import waterfall from "../Image/waterfall.jpg";
import fall from "../Image/fall.jpg";
import aurora from "../Image/aurora.jpg";
import flower from "../Image/flower.jpg";
import tree from "../Image/tree.jpg";

import bridge from "../Image/bridge.jpg";
import load from "../Image/load.jpg";
import skycity from "../Image/skycity.jpg";

import sea1 from "../Image/sea1.jpg";
import sea2 from "../Image/sea2.jpg";
import sea3 from "../Image/sea3.jpg";

class Btn {
    title : string;
    img : string;
    catg : string
    constructor(t : string, i : string, c: string){
        this.title = t;
        this.img = i;
        this.catg =c;
    }
}

const tabBtnData = [
    new Btn("자연이미지의 간단한 설명",waterfall,"자연"),
    new Btn("자연이미지의 간단한 설명",fall,"자연"),
    new Btn("자연이미지의 간단한 설명",aurora,"자연"),
    new Btn("자연이미지의 간단한 설명",flower,"자연"),
    new Btn("자연이미지의 간단한 설명",tree,"자연"),
    new Btn("도시 이미지의 간단한 설명",bridge,"도시"),
    new Btn("도시 이미지의 간단한 설명",load,"도시"),
    new Btn("도시 이미지의 간단한 설명",skycity,"도시"),
    new Btn("바다 이미지의 간단한 설명",sea1,"바다"),
    new Btn("바다 이미지의 간단한 설명",sea2,"바다"),
    new Btn("바다 이미지의 간단한 설명",sea3,"바다"), 
]




export default tabBtnData;

