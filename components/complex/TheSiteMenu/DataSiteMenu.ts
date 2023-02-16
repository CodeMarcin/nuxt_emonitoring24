export interface IMenuItems {
  label: string;
  link?: string;
  subItems?: { label?: string; link?: string; image: string }[];
}
export const DATA__MENU_ITEMS: IMenuItems[] = [
  {
    label: "Strona główna",
    link: "/",
  },
  {
    label: "Oferta",
    subItems: [
      {
        label: "Monitoring",
        link: "/offert/monitoring",
        image: "tabler:device-cctv",
      },
      {
        label: "Alarmy",
        link: "/offert/alarms",
        image: "mdi:alarm-light-outline",
      },
      {
        label: "Domofony",
        link: "/offert/alarms",
        image: "icon-park-outline:control",
      },
      {
        label: "Automatyka do bram",
        link: "/offert/alarms",
        image: "material-symbols:gate-outline",
      },
      {
        label: "Kontrola dostępu",
        link: "/offert/alarms",
        image: "academicons:open-access",
      },
      {
        label: "Instalacje elektryczne",
        link: "/offert/alarms",
        image: "ic:outline-electric-bolt",
      },
      {
        label: "Systemy p. poż.",
        link: "/offert/alarms",
        image: "ic:outline-local-fire-department",
      },
    ],
  },
  {
    label: "Realizacje",
    link: "/realizations",
  },
  {
    label: "Kontakt",
    link: "/",
  },
];
