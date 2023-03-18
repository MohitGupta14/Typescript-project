import { HasFormatter } from "./Interfaces/HasFormater.js";
import {Invoice} from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// const inOne = new Invoice ("mario" , "work on his website", 200 );
// const inTwo = new Invoice ("jack", "work on his website" , 300);

// // console.log(inOne,inTwo);

// const invoices : Invoice[]=[];
// invoices.push(inOne);
// invoices.push(inTwo);

// invoices.forEach(inv=>{
//     console.log(inv.client,inv.amount,inv.format());
// })
const ul =document.querySelector('ul')!;
const list =new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;            
const details = document.querySelector('#details') as HTMLInputElement;                    
const amount = document.querySelector('#amount') as HTMLInputElement;         

let doc:HasFormatter;
form.addEventListener('submit', (e: Event)=>{
  e.preventDefault();
  if(type.value==="invoice"){
    doc=new Invoice(toFrom.value,details.value,amount.valueAsNumber);
  }else{
    doc=new Payment(toFrom.value,details.value,amount.valueAsNumber)
  }
  list.render(doc,type.value,"start");
})
