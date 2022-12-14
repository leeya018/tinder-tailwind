import Nav from "@/ui/nav";
import LineNav from "@/ui/linenav";
import Messages from "@/ui/messages";

export default function NavSection({}) {
  return (
    <div className="border-2 border-black w-[25%]">
      <div className="flex flex-col h-[100%]">
        {/* nav */}
        <Nav />
        {/* nav-line */}
        <LineNav />
        {/* messages */}
        <Messages />
      </div>
    </div>
  );
}
