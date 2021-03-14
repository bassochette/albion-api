import { Requester } from '../Requester/Requester';

export interface FetchRecentEventsQuery {
  limit: number;
  offset: number;
}

export interface FetchTopEventQuery extends FetchRecentEventsQuery{
  range: 'week' | 'month' | 'lastMonth' | 'lastWeek';
}

export class Events extends Requester {
  async fetchRecent(query: FetchRecentEventsQuery): Promise<Event[]> {
    return this.get<Event[], FetchRecentEventsQuery>('/events', query);
  }

  async fetchTop(query: FetchTopEventQuery): Promise<Event[]> {
    return this.get<Event[], FetchTopEventQuery>('/events/killfame', query);
  }
}