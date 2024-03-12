import React from "react";
import PostCard from "./PostCard";
import { samplePosts } from "@/lib/data";

const Posts = () => {
  return (
    <div className="space-y-2">
      {samplePosts.map((item) => (
        <PostCard key={item._id} post={item} />
      ))}
    </div>
  );
};

export default Posts;
