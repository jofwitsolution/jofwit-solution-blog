import React from "react";

const TopPosts = () => {
  return (
    <div className="rounded-lg bg-white shadow w-full">
      <div className="py-3 px-4 border-b">
        <span className="font-semibold text-[20px]">Top Posts</span>
      </div>

      <div className="py-3 px-4 border-b flex flex-col gap-4">
        <span>How to view server logs in real-time in VS Code</span>
        <span className="text-[12px]">54 Likes</span>
      </div>
      <div className="py-3 px-4 border-b flex flex-col gap-4">
        <span>How to view server logs in real-time in VS Code</span>
        <span className="text-[12px]">54 Likes</span>
      </div>
      <div className="py-3 px-4 border-b flex flex-col gap-4">
        <span>How to view server logs in real-time in VS Code</span>
        <span className="text-[12px]">54 Likes</span>
      </div>
    </div>
  );
};

export default TopPosts;
