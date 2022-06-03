import axios from "axios";

export interface IRepository {
    id: string,
    name: string,
    description: string,
    homepage: string,
    html_url: string,
}

export const getRepositories = async (path: string) => {
    const response = await axios.get<IRepository[]>(path);
    return response.data;
}