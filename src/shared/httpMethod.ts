import { httpInstance } from "./httpInstance";

async function httpGet<TResponse>(URL: string) {
  return await httpInstance.get<TResponse, TResponse>(encodeURI(URL));
}

export { httpGet };
