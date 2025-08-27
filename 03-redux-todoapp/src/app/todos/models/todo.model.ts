

export class Todo {

    public id: number
    public text: string
    public isCompleted: boolean;

    constructor(text: string) {
        this.id = Math.random();
        this.text = text;
        this.isCompleted = false;
    }
}