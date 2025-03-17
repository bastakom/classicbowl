import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { Navigation } from "./navigation";
import { PreMenu } from "./pre-menu";

export const Header = async () => {
  const settings = await getThemeSettings();

  return (
    <div>
      <PreMenu settings={settings.content.pre_menu} />
      <Navigation props={settings.content} />
    </div>
  );
};
