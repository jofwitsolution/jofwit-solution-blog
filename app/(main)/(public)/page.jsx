import Posts from "@/components/Posts";
import RightSide from "@/components/RightSide";
import LeftSideMenu from "@/components/shared/navigation/LeftSideMenu";

export default function Home() {
  return (
    <div className="max-width top-padding">
      <div className="w-full flex gap-[16px] pt-4">
        <div className="flex-[20%] max-md:hidden">
          <LeftSideMenu />
        </div>
        <div className="flex-[55%]">
          <Posts />
        </div>
        <div className="flex-[25%] max-lg:hidden">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
