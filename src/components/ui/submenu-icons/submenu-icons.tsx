import { PiBowlingBallLight } from "react-icons/pi";
import { GiDart } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { PiHamburgerLight } from "react-icons/pi";
import { PiMusicNotesThin } from "react-icons/pi";
import { PiCheersThin } from "react-icons/pi";
import { IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const SubMenuIcons = ({ props }: any) => {
  return (
    <>
      {props.icon.map((item: any) => {
        const Icons = (size: any) => {
          switch (item) {
            case "bowling":
              return <PiBowlingBallLight fontSize={size.size} />;
            case "dart":
              return <GiDart fontSize={size.size} />;
            case "children_party":
              return <GiPartyPopper fontSize={size.size} />;
            case "bbb_package":
              return <PiHamburgerLight fontSize={size.size} />;
            case "music_quiz":
              return <PiMusicNotesThin fontSize={size.size} />;
            case "aw_package":
              return <PiCheersThin fontSize={size.size} />;
            case "bowling_food":
              return <IoRestaurantOutline fontSize={size.size} />;
            case "children_menu":
              return <IoRestaurantOutline fontSize={size.size} />;
            case "todays_menu":
              return <IoRestaurantOutline fontSize={size.size} />;
            case "theme_menu":
              return <IoRestaurantOutline fontSize={size.size} />;
            case "bigger_company":
              return <AiOutlineUsergroupAdd fontSize={size.size} />;
            default:
              "";
          }
        };
        return (
          <div key={item._uid}>
            <Icons size="24" />
          </div>
        );
      })}
    </>
  );
};
