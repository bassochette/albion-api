import { Requester } from '../Requester/Requester';
export interface FetchRecentEventsQuery {
    limit: number;
    offset: number;
}
export interface FetchTopEventQuery extends FetchRecentEventsQuery {
    range: 'week' | 'month' | 'lastMonth' | 'lastWeek';
}
export declare class Events extends Requester {
    fetchRecent(query: FetchRecentEventsQuery): Promise<Event[]>;
    fetchTop(query: FetchTopEventQuery): Promise<Event[]>;
}
