export interface Isongs {
  id: number;
  songName: string;
  length: number;
  trackImage: any;
  mp3: string;
  playCount: number;
}

export class Home implements Isongs {
  id!: number;
  songName!: string;
  length!: number;
  trackImage!: any;
  mp3!: string;
  playCount!: number;
}
