export type UserAddresses = {
  street: string;
  number: number;
};

export interface User {
  name: string;
  userName: string;

  /**
   * @return
   * Retrona uma Promise com um Array de endereços
   */
  getAddresses(): Promise<UserAddresses[]>;

  /**
   * @return
   * Retrona uma Promise com as informações do usuário.
   */
  getInfo(): Promise<String>;
}
