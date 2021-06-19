export default class Data {

    constructor() {
        this.URI = "https://my-json-server.typicode.com/hispanos/db-guappjolotas/";
    }

    async getFoodsByCategory(categoryId) {
        let data = [];
        const resp = await fetch(`${this.URI}foods?category=${categoryId}`);
        if(resp.ok) {
            data = await resp.json()
        }
        return data;
    }

    async getFoods() {
        let data = [];
        const resp = await fetch(`${this.URI}foods`);
        if(resp.ok) {
            data = await resp.json()
        }
        return data;
    }

    async getCategories() {
        let data = [];
        const resp = await fetch(`${this.URI}categories`);
        if(resp.ok) {
            data = await resp.json()
        }
        return data;
    }
 
}