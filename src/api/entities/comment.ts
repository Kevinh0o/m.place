export class Comment {
    constructor(
        public productId: number,
        public userId: string,
        public content: string,
        public id?: number,
    ){

    }
}