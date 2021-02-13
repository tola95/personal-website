import axios from "axios";

export default class Client<R> {
    private domain: string;

    public constructor(domain: string) {
        this.domain = domain;
    }

    public async get(path: string): Promise<R | null> {
        const fullPath = this.domain + path;
        try {
            console.log(`Successfully called GET on ${fullPath}`);
            const response = await axios.get(fullPath);
            return response.data;
        } catch (e) {
            console.log(`Error calling GET on ${fullPath}`);
            return Promise.reject(null);
        }
    }
}
