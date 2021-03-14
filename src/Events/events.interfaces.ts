export type KillArea = 'OPEN_WORLD';
export type KillType = 'KILL';

export interface Item {
  Count: number;
  Quality: number;
  Type: string;
}

export interface Equipement {
  Armor?: Item;
  Bag?: Item;
  Cape?: Item;
  Food?: Item;
  Head?: Item;
  MainHand?: Item;
  Mount?: Item;
  OffHand?: Item;
  Potion?: Item;
  Shoes?: Item;
}

export interface ToonInEvent {
  AllianceId: string;
  AllianceName: string;
  AllianceTag: string;
  Avatar: string;
  AvatarRing: string;
  AverageItemPower: number
  DeathFame: number;
  Equipment: Equipement;
  FameRatio: number;
  GuildId: string;
  GuildName: string;
  Id: string;
  Inventory: Item[];
  KillFame: number;
  Name: string;
}

export interface Event {
  BattleId: string;
  EventId: string;
  KillArea: KillArea;
  groupMemberCount: number;
  numberOfParticipants: number;
  GroupMembers: ToonInEvent[];
  Killer: ToonInEvent;
  Participants: ToonInEvent[];
  Victim: ToonInEvent;
  Type: KillType;
  Version: number;
  TotalVictimKillFame: number;
}
