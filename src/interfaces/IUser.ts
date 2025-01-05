interface IUser {
  accessToken(arg0: string, accessToken: any): unknown;
  message?: string;
  id?: number | string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type { IUser };
