import { AdminUser } from "../implementations/AdminUser";
import { UserAddresses, User } from "../interface/User";

/**
 * Lazy Instantiation of AdminUser
 */
export class UserProxy implements User {

  private realUser: User | null = null;
  private realUserAddresses: UserAddresses[] | null = null;
  private realUserInfo: String | null = null;

  public name: string;
  public userName: string

  constructor(name: string, userName: string){
    this.name = name;
    this.userName = userName;
  }

  private createUser(): User {
    if(this.realUser === null){
      this.realUser = new AdminUser(this.name, this.userName);
    }

    return this.realUser;
  }

  /**
   * Método async por retornar uma promise.
   */
  async getAddresses(): Promise<UserAddresses[]>{
    this.realUser = this.createUser();

    if (this.realUserAddresses === null){
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }

  /**
   * Metodo async por retornar uma promise.
   */
  async getInfo(): Promise<String>{
    this.realUser = this.createUser();

    if(this.realUserInfo === null){
      this.realUserInfo = await this.realUser.getInfo();
    }

    return this.realUserInfo;
  }
}
