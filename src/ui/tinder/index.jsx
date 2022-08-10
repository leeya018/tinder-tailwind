import ProfileSection from "./profilesection";
import MessagesSection from "./messaegessection";
import NavSection from "./navsection";

export default function Tinder({}) {
  return (
    <div className="h-[100vh] bg-white flex  box-border">
      <NavSection />
      <MessagesSection />
      <ProfileSection />
    </div>
  );
}
