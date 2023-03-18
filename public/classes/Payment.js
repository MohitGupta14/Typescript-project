export class Payment {
    constructor(Recipent, details, amount) {
        this.Recipent = Recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        const data = `${this.Recipent} has to give ${this.amount} for ${this.details}`;
        return data;
    }
}
