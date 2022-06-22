export type SystemUserAddressProtocol = {
  street: string;
  number: number;
};

export interface SystemUserProtocol {
  name: string;
  userName: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
