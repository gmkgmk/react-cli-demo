import { createBEM } from './bem';

export function createNamespace(name: string) {
  const prefixedName = `van-${name}`;
  return [prefixedName, createBEM(prefixedName)];
}
