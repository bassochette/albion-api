import { Requester } from '../Requester/Requester';
import { KillEvent } from './kills.interfaces';

export interface FetchRecentKillsQuery {
  limit: number;
  offset: number;
  allianceId?: string;
  guildId?: string;
}

export interface FetchTopEventQuery extends FetchRecentKillsQuery{
  range: 'week' | 'month' | 'lastMonth' | 'lastWeek';
}

export class Kills extends Requester {
  async fetchRecent(query: FetchRecentKillsQuery): Promise<KillEvent[]> {
    return this.get<KillEvent[], FetchRecentKillsQuery>('/events', query);
  }

  async fetchTop(query: FetchTopEventQuery): Promise<KillEvent[]> {
    return this.get<KillEvent[], FetchTopEventQuery>('/events/killfame', query);
  }
}