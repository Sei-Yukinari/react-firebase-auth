export interface AuthInfo {
  email: string;
  password: string;
}

export interface SignIn {
  loaded: boolean;
  isLogin: boolean;
  token: string;
  error: boolean;
  errorMessage: string;
}
