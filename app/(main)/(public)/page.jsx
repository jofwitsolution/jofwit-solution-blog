import Posts from "@/components/Posts";
import RightSide from "@/components/RightSide";
import LeftSideMenu from "@/components/shared/navigation/LeftSideMenu";

export default function Home() {
  return (
    <div className="max-width">
      <div className="w-full flex gap-[16px] pt-4">
        <div className="flex-[20%]">
          <LeftSideMenu />
        </div>
        <div className="flex-[55%]">
          <Posts />
        </div>
        <div className="flex-[25%]">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
