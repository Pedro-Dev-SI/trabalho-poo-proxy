import { SystemUserAddressProtocol, SystemUserProtocol } from "../interface/SystemUserInterface";

export class AdminUser implements SystemUserProtocol {

  public name: string;
  public userName: string

  constructor(name: string, userName: string){
    this.name = name;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]>{
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        return resolve([
          {street: 'Rua Cmd Motta', number: 34},
          {street: 'Av Teixeira', number: 200},
        ])
      }, 3000);
    })
  }
}
