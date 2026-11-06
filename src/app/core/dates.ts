/** yyyy-MM-dd in local time (toISOString would shift the day in UTC-5). */
export function toIsoDate(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/** Returns the seven-day window index used by the availability picker, anchored at its first day. */
export function weekWindowIndex(value: string, anchor: Date): number {
  const [year, month, day] = value.slice(0, 10).split('-').map(Number);
  const slotDay = Date.UTC(year, month - 1, day);
  const [anchorYear, anchorMonth, anchorDay] = toIsoDate(anchor).split('-').map(Number);
  const anchorDayUtc = Date.UTC(anchorYear, anchorMonth - 1, anchorDay);
  return Math.floor((slotDay - anchorDayUtc) / (7 * 24 * 60 * 60 * 1000));
}

export function startOfToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

/** Parses the backend's yyyy-MM-dd as a local date. */
export function fromIsoDate(value: string): Date {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/** Groups items by the local day of a yyyy-MM-ddTHH:mm:ss field, keeping their order. */
export function groupByDay<T>(items: T[], dateOf: (item: T) => string): { day: string; items: T[] }[] {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const day = dateOf(item).slice(0, 10);
    groups.set(day, [...(groups.get(day) ?? []), item]);
  }
  return [...groups.entries()].map(([day, grouped]) => ({ day, items: grouped }));
}

/** True when the session starts in less than 24 hours (US11/US12 late changes). */
export function isWithin24Hours(startTime: string, now = Date.now()): boolean {
  return new Date(startTime).getTime() - now < 24 * 60 * 60 * 1000;
}
