
export interface User {
  id: number,
  firstName: string,
  lastName: string,
  gender: 'women' | 'men',
  pId: number,
  mobNum: number,
  legalAddressCountry:string,
  legalAddressCity: string;
  legalAddressAddress: string;
  actualAddressCountry:string,
  actualAddressCity: string;
  actualAddressAddress: string;
}
