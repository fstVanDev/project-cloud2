import Cookies from 'universal-cookie';

const manager = new Cookies();

function expireIn(seconds: number): Date {
  const t = new Date();

  t.setSeconds(t.getSeconds() + seconds);

  return t;
}

/**
 * Set browser cookie
 * @param name cookie name
 * @param value value
 * @param keepTo how long save cookie in seconds
 */
export function setCookie(name: string, value: string, keepTo = 60 * 60 * 24 * 7): void {
  manager.set(name, value, {
    expires: expireIn(keepTo),
  });
}

/**
 * Retrieve cookie by name
 * @param name
 */
export function getCookie(name: string): string | null {
  return manager.get(name) || null;
}
