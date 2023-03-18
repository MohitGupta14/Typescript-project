import { HasFormatter } from "../Interfaces/HasFormater";

export class Invoice implements HasFormatter{
    
    constructor(
        readonly client :string,
        private details : string,
        public amount : number
    ){
     
    }
    format(){
        const data= `${this.client} owes ${this.amount} for ${this.details}`;
        return data
    }

}
