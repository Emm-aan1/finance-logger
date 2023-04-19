import { Formatter } from "../interface/Formatter.js";


export class ListTemplate {
  constructor(private container: HTMLUListElement) { };

  render(item: Formatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h4.innerText = heading;
    li.append(h4);

    p.innerText = item.format();
    li.append(p);

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}