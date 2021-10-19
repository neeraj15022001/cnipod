import IpodScreen from "../IpodScreen/IpodScreen.jsx";
import IpodButtons from "../IPodButtons/IpodButtons";
import HalfScreenWithList from "../../screens/HalfScreenWithList/HalfScreenWithList.jsx";
import FullScreen from "../../screens/FullScreen/FullScreen";
import Player from "../../screens/Player/Player.jsx";
const Home = ({ isActive }) => {
  return (
    <HalfScreenWithList
      title="iPod.js"
      listItems={["coverflow", "music", "games", "settings"]}
      isActive={isActive}
    />
  );
};
const CoverFlow = () => {
  return <FullScreen title="coverflow" />;
};
const Artists = () => {
  return <FullScreen title="artists" />;
};
const Albums = () => {
  return <FullScreen title="albums" />;
};
const Music = ({ isActive }) => {
  return (
    <HalfScreenWithList
      title="iPod.js"
      listItems={["allSongs", "artists", "albums"]}
      isActive={isActive}
    />
  );
};
const Settings = () => {
  return (
    <FullScreen
      title="settings"
      imgURL={"https://img.icons8.com/fluency/240/000000/settings.png"}
    />
  );
};
const Games = () => {
  return (
    <FullScreen
      title="games"
      imgURL={"https://img.icons8.com/emoji/96/000000/game-die.png"}
    />
  );
};
export {
  IpodScreen,
  IpodButtons,
  Home,
  CoverFlow,
  Music,
  Settings,
  Games,
  Player,
  Artists,
  Albums,
};
