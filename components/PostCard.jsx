import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="rounded-lg bg-white pb-6 shadow">
      <div>
        <Image
          src="/images/posts/post-image-1.png"
          width={500}
          height={300}
          alt="post-image"
          className="w-full rounded-t-lg"
        />
      </div>
      <div className="flex gap-2 items-center pt-4 px-2 sm:px-4">
        <Image
          src="/images/icons/user-avatar.svg"
          width={40}
          height={40}
          alt="user"
          className="rounded-full"
        />
        <div className="flex flex-col text-[14px]">
          <span className="font-medium">John Smith</span>
          <span className="text-gray-500">Mar 5 (2 days ago)</span>
        </div>
      </div>
      <div className="px-2 sm:px-4 mt-3 space-y-4">
        <span className="text-[25px] leading-[34px] md:text-[30px] font-semibold md:leading-[40px]">
          Skill issue: How to Master anything 10x faster, without looking stupid
        </span>

        <div className="flex gap-4 flex-wrap text-[14px]">
          <Link href="#" className="btn-hover-style">
            #beginner
          </Link>
          <Link href="#" className="btn-hover-style">
            #beginner
          </Link>
          <Link href="#" className="btn-hover-style">
            #beginner
          </Link>
        </div>

        <div className="flex justify-between gap-4 items-center text-gray-500 text-[14px]">
          <div className="flex gap-4">
            <span className="flex gap-2 items-center btn-hover-style">
              <Image
                src="/images/icons/heart.svg"
                width={22}
                height={22}
                alt="heart"
              />
              <span>45 Likes</span>
            </span>
            <span className="flex gap-2 items-center btn-hover-style">
              <Image
                src="/images/icons/comment.svg"
                width={18}
                height={18}
                alt="comment"
              />
              <span>23 Comments</span>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span>13 min read</span>
            <span className="btn-hover-style">
              <Image
                src="/images/icons/save.svg"
                width={30}
                height={30}
                alt="save"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
