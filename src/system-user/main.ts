import { UserProxy } from "./proxies/UserProxy";

async function clientCode(): Promise<void> {
  const user = new UserProxy('Pedro', 'pedroselvate');
  console.log("Isso vai demorar 3 segundos");
  console.log(await user.getInfo());

  console.log("Repetindo");
  for(let i = 0; i < 2; i++) {
    console.log(await user.getInfo());
  }
}

clientCode();
