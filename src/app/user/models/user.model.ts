
export interface User {
  uId: number,
  name: string,
  lastName: string,
  gender: string,
  pId: number,
  mobNum: number,
  legalAddress: LegalAddress,
  actualAddress: ActualAddress,
}

export interface LegalAddress{
  legalCountry: string,
  legalCity:string,
  legalAddress: string,
}

export interface ActualAddress{
  actualCountry: string,
  actualCity:string,
  actualAddress: string
}

