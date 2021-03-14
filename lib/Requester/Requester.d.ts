export declare class Requester {
    private readonly apiURL;
    constructor(apiURL?: string);
    get<ReturnType, QueryParams = any>(path: any, query: QueryParams): Promise<ReturnType>;
    request<ReturnType>(url: string, method: string): Promise<ReturnType>;
}
