import fetch from 'node-fetch';
import * as querystring from 'query-string';

export class Requester {

  constructor(
    private readonly apiURL = 'https://gameinfo.albiononline.com/api/gameinfo',
  ) {}

  async get<ReturnType, QueryParams = any>(path, query: QueryParams): Promise<ReturnType> {
    const qs = query ? `?${querystring.stringify(query)}` : '';
    const url = `${this.apiURL}${path}${qs}`;
    const json = await this.request(url, 'GET');
    return json as ReturnType;
  }

  async request<ReturnType>(url: string, method: string): Promise<ReturnType> {
    const response = await fetch(
      url,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }
}