export {}; // Se till att filen behandlas som en modul

declare global {
  interface Window {
    getData: (slug: string) => Promise<any>; // Anpassa typen efter din funktion
    getThemeSettings: () => Promise<any>;
  }
}
