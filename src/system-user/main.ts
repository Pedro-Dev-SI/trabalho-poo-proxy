import { SystemUserProxy } from "./proxies/SystemUserProxy";

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Pedro', 'pedroselvate');
  console.log("Isso vai demorar 3 segundos");
  console.log(await user.getAddresses());

  console.log("Repetindo");
  for(let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
