import {Compte} from '../Accounts/accounts-model';

export class Client {
   code: any;
   nom: string ;
   prenom: string;
   dateNaiss: any;
   email: string;
  address: Adress;
   sexe:string;
   comment:string;
  comptes:Compte[];

}
export class Adress {
  postalCode: string;
  country: string;
  city: string;
  principalAdress: string;

}
