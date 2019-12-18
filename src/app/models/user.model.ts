export class User {
    public id: string;
    public name: string;
    public DOB: string;

    constructor(id: string, name: string, DOB: string) {
        this.id = id;
        this.name = name;
        this.DOB = DOB;
    }
}