import env from "react-dotenv";
export default class Data {

    constructor() {
        this.URI = env.URL_API;
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