import { Events } from './Events/Events';

export class AlbionKillboard {
  constructor(
    public readonly events = new Events(),
  ) {}
}