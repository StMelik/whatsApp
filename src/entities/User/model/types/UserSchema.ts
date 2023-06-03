export interface User {
  wid: string;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
