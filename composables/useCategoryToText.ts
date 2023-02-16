export type TUseCategoryToIconCategory = "CCTV" | "alarms" | "intercoms" | "gateAutomation" | "accessControl" | "electricalInstallations" | "fireProtectionSystem";

export const useCategoryToText = (category: TUseCategoryToIconCategory) => {
  let text: string;
  switch (category) {
    case "CCTV":
      text = "Monitoring wizyjny";
      break;
    case "alarms":
      text = "Alarmy";
      break;
    case "intercoms":
      text = "Domofony";
      break;
    case "gateAutomation":
      text = "Automatyka do bram";
      break;
    case "accessControl":
      text = "Kontrola dostępu";
      break;
    case "electricalInstallations":
      text = "Instalacje elektryczne";
      break;
    case "fireProtectionSystem":
      text = "Systemy p. poż.";
      break;
    default:
      text = "tabler:device-cctv";
      break;
  }
  return text;
};
