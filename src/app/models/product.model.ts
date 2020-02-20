export class Product {
    public id: number;
    public name: string;
    public expirationDate: string;
    constructor(id: number, name: string, expirationDate: string) {
        this.id = id;
        this.name = name;
        this.expirationDate = expirationDate;
    }
}
