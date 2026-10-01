export type MediationStatus = "a-venir" | "en-cours" | "realise";

export function getStatus(start: Date, end?: Date, now = new Date()): MediationStatus {
  const fin = end ?? start;
  if (now < start) return "a-venir";
  if (now <= fin) return "en-cours";
  return "realise";
}

export const statusLabelFr: Record<MediationStatus, string> = {
  "a-venir": "À venir",
  "en-cours": "En cours",
  "realise": "Réalisé",
};
