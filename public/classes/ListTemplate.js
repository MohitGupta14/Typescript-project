export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const P = document.createElement('P');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        P.innerText = item.format();
        li.append(P);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
