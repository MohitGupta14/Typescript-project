import { HasFormatter } from "../Interfaces/HasFormater";
export class Payment implements HasFormatter{
    
    constructor(
        readonly Recipent :string,
        private details : string,
        public amount : number
    ){
     
    }
    format(){
        const data= `${this.Recipent} has to give ${this.amount} for ${this.details}`;
        return data
    }

}
