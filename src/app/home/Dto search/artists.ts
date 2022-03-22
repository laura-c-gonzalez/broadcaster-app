export interface Iartists {
  id: number;
  firstName: string;
  lastName: string;
  artistName: string;
  address: string;
}
export class Home implements Iartists {
  id!: number;
  firstName!: string;
  lastName!: string;
  artistName!: string;
  address!: string;
}
