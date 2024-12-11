export interface Iartists {
  id: number;
  firstName: string;
  lastName: string;
  artistName: string;
  address: string;
  email: string;
  password: string;
}
export class Artists implements Iartists {
  id!: number;
  firstName!: string;
  lastName!: string;
  artistName!: string;
  address!: string;
  email!: string;
  password!: string;
}

