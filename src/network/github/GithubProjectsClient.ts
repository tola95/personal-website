import Client from "../client/Client";

export const GITHUB_API_URL = "https://api.github.com";
export const PERSONAL_PATH = "/users/tola95/repos?sort=updated_at&order=desc"

export interface GithubProjectsResponse {
    name?: string;
    html_url?: string;
    description?: string;
}

export class GithubProjectsClient extends Client<GithubProjectsResponse[]> {
    public constructor() {
        super(GITHUB_API_URL);
    }

    public get() {
        return super.get(PERSONAL_PATH);
    }
}