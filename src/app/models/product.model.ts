export class Product {
    public id: number;
    public name: string;
    public expirationDate: Date;
    constructor(id: number, name: string, expirationDate: Date) {
        this.id = id;
        this.name = name;
        this.expirationDate = expirationDate;
    }
}
