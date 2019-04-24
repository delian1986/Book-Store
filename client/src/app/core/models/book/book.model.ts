export default class BookModel {
    constructor(
        public _id: string,
        public title: string,
        public description: string,
        public author: string,
        public image: string,
        public price:number,
        public added?:Date
    ) { }
}