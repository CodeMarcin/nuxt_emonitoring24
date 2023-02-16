export interface ICounters {
  icon: string;
  start: number;
  end: number;
  duration: number;
  label: string;
}

export const DATA__COUNTERS: ICounters[] = [
  {
    icon: "ph:calendar",
    start: 0,
    end: 12,
    duration: 2,
    label: "Lat na rynku",
  },

  {
    icon: "bx:cctv",
    start: 0,
    end: 2000,
    duration: 2,
    label: "Zamontowanych kamer",
  },
  {
    icon: "icon-park-outline:building-one",
    start: 0,
    end: 1000,
    duration: 2,
    label: "Zadowolonych klientów",
  },
];
