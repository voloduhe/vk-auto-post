interface Date {
  YYYY: number;
  MM: number;
  DD: number;
  h: number;
  m: number;
  s: number;
}

export function getTimeoutInMs({ YYYY, MM, DD, h, m, s }: Date) {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const t1 = new Date();
  const t2 = new Date(YYYY, MM - 1, DD, h, m, s);

  return Math.abs(t1.getTime() - t2.getTime());
}
