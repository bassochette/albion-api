import { Kills } from './Kills/Kills';

export class AlbionKillboard {
  constructor(
    public readonly events = new Kills(),
  ) {}
}

export * from './Kills/kills.interfaces';