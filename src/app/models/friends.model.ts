export class Friends {
    public id: string;
    public name: string;
    public familyName: string;
    public day: string;
    public month: string;

    constructor(id: string, name: string, familyName: string, day: string, month: string) {
        this.id = id;
        this.name = name;
        this.familyName = familyName;
        this.day = day;
        this.month = month;
    }
}