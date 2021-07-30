export interface Account {
  id: number;
  uId: number;
  accountType: AccountType;
  currency: Currency;
  accountStatus: AccountStatus;
}

export enum AccountType {
  Current = "Current",
  Savings = "Savings",
  Accumulator = "Accumulator",
}
export enum Currency {
  GEL = "GEL",
  USD = "USD",
  EUR = "EUR",
  RUB = "RUB"
}
export enum AccountStatus {
  Active = "Active",
  Closed = "Closed",
}


