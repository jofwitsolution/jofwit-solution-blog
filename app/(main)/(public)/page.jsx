import LeftSideMenu from "@/components/shared/navigation/LeftSideMenu";

export default function Home() {
  return (
    <div className="max-width">
      <div className="w-full flex gap-[16px] pt-4">
        <div className="flex-[25%]">
          <LeftSideMenu />
        </div>
        <div className="bg-blue-300 flex-[50%]">dddd</div>
        <div className="bg-slate-300 flex-[25%]">wwwww</div>
      </div>
    </div>
  );
}
