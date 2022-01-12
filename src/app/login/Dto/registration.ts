export interface IRegistration {
  email: string;
  password: string;
  artistName: string;
  MSAApproved: string;
}
export class Registration implements IRegistration {
  email!: string;
  password!: string;
  artistName!: string;
  MSAApproved!: string;
}
