/* tslint:disable */

export interface Query {
  me?: User | null;
}

export interface User {
  name?: string | null;
  lastName?: string | null;
}
