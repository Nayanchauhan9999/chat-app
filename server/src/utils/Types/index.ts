export enum StatusCode {
  OK = 200,
  CREATED = 201,
  DELETED = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}

export interface IUserSignUp {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}
