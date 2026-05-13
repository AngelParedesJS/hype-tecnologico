interface TimeUnit {
  unit: Intl.RelativeTimeFormatUnit;
  seconds: number;
}

export function getRelativeTime(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 0) {
    return "en el futuro";
  }
  const units: TimeUnit[] = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "week", seconds: 604800 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];
  for (const { unit, seconds } of units) {
    const value = Math.floor(diffInSeconds / seconds);
    if (value >= 1 || unit === "second") {
      const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
      return rtf.format(-value, unit); // negativo = "hace"
    }
  }
  return "ahora mismo";
}
