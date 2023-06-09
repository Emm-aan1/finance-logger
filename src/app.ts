import { Invoice } from './modules/Invoice.js';
import { Payment } from './modules/Payment.js'
import { Formatter } from './interface/Formatter.js';
import { ListTemplate } from './modules/ListTemplate.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// list template
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)


// event listener
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: Formatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }


  list.render(doc, type.value, 'start')
})

