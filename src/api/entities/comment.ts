export class Comment {
    public id;
    public productId;
    public content;

    constructor(productId: number, userId: string, content: string){
        this.id = userId;
        this.productId = productId;
        this.content = content;
    }
}