import { AdminUser } from "../implementations/AdminUser";
import { SystemUserAddressProtocol, SystemUserProtocol } from "../interface/SystemUserInterface";

export class SystemUserProxy implements SystemUserProtocol {

  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(public name: string, public userName: string){}

  private createUser(): SystemUserProtocol {
    if(this.realUser === null){
      this.realUser = new AdminUser(this.name, this.userName);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]>{
    this.realUser = this.createUser();

    if (this.realUserAddresses === null){
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}
