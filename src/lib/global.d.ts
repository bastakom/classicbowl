export {};

declare global {
  interface Window {
    getData: (slug: string) => Promise<any>;
    getThemeSettings: () => Promise<any>;
  }
}
