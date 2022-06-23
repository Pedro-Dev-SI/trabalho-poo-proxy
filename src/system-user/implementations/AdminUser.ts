import { UserAddresses, User } from "../interface/User";

export class AdminUser implements User {

  public name: string;
  public userName: string

  constructor(name: string, userName: string){
    this.name = name;
    this.userName = userName;
  }

  /**
   * Método async por retornar uma promise.
   */
  async getAddresses(): Promise<UserAddresses[]>{
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        return resolve([
          {street: 'Rua Cmd Motta', number: 34},
          {street: 'Av Teixeira', number: 200},
        ])
      }, 3000);
    })
  }

  async getInfo(): Promise<String>{
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        return resolve(`Nome do usuário: ${this.name}`);
      }, 3000);
    })
  }
}
