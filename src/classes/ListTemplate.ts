//import Container from "../../../../node_modules/postcss/lib/container";
import { HasFormatter } from "../Interfaces/HasFormater";
export class ListTemplate{
  constructor(private container: HTMLUListElement){}
    render(item : HasFormatter ,heading : string , pos : 'start' | 'end'){
  
    const li = document.createElement('li');
    const P = document.createElement('P');
    const h4 =document.createElement('h4');
     
    h4.innerText=heading;
    li.append(h4);
    P.innerText= item.format()
    li.append(P);

    if (pos==='start'){
        this.container.prepend(li)
    }else{
        this.container.append(li)
    }
    }
}