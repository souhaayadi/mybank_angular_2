export class Client {
   code: any;
   nom: string ;
   prenom: string;
   dateNaiss: any;
   email: string;
   adress: Adress;
   sexe:string;
  comment:string;

}
export class Adress {
  postalCode: string;
  country: string;
  city: string;
  principalAdress: string;
  code_adresse: string;
}
