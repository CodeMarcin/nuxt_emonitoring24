export type TUseCategoryToIconCategory = "CCTV" | "alarms" | "intercoms" | "gateAutomation" | "accessControl" | "electricalInstallations" | "fireProtectionSystem";

export const useCategoryToIcon = (category: TUseCategoryToIconCategory) => {
  let icon: string;
  switch (category) {
    case "CCTV":
      icon = "tabler:device-cctv";
      break;
    case "alarms":
      icon = "mdi:alarm-light-outline";
      break;
    case "intercoms":
      icon = "icon-park-outline:control";
      break;
    case "gateAutomation":
      icon = "material-symbols:gate-outline";
      break;
    case "accessControl":
      icon = "academicons:open-access";
      break;
    case "electricalInstallations":
      icon = "ic:outline-electric-bolt";
      break;
    case "fireProtectionSystem":
      icon = "ic:outline-local-fire-department";
      break;
    default:
      icon = "tabler:device-cctv";
      break;
  }
  return icon;
};
