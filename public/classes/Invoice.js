export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        const data = `${this.client} owes ${this.amount} for ${this.details}`;
        return data;
    }
}
