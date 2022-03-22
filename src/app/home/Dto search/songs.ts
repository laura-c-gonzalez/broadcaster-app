export interface Isongs {
  id: number;
  songName: string;
  length: number;
  trackImage: any;
}
export class Home implements Isongs {
  id!: number;
  songName!: string;
  length!: number;
  trackImage!: any;
}
