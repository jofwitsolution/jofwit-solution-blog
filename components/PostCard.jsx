import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/lib/utils";

const PostCard = ({ post }) => {
  return (
    <div className="rounded-lg bg-white pb-6 shadow">
      {post?.image?.url && (
        <Link href={`/${post.user.username}/${post.title}`}>
          <Image
            src={post.image.url}
            width={500}
            height={300}
            alt="post-image"
            className="w-full rounded-t-lg"
          />
        </Link>
      )}

      <div className="flex gap-2 items-center pt-4 px-2 sm:px-4">
        <Image
          src={post.user.avatar.url}
          width={40}
          height={40}
          alt="user"
          className="rounded-full"
        />
        <div className="flex flex-col text-[14px]">
          <span className="font-medium">{`${post.user.firstName} ${post.user.lastName}`}</span>
          <span className="text-gray-500">
            {formatPostDate(post.createdAt)}
          </span>
        </div>
      </div>
      <div className="px-2 sm:px-4 mt-3 space-y-4">
        <Link
          href={`/${post.user.username}/${post.title}`}
          className="text-[18px] leading-[25px] sm:text-[25px] sm:leading-[34px] md:text-[30px] hover:text-primary font-semibold md:leading-[40px]"
        >
          {post.title}
        </Link>

        <div className="flex gap-4 flex-wrap text-[14px]">
          {post.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/t/${tag.name}`}
              className="btn-hover-style"
            >
              #{tag.name}
            </Link>
          ))}
        </div>

        <div className="flex max-xs:text-[12px] justify-between gap-4 items-center text-gray-500 text-[14px]">
          <div className="flex gap-4">
            <span className="flex gap-2 items-center btn-hover-style">
              <Image
                src="/images/icons/heart.svg"
                width={22}
                height={22}
                alt="heart"
              />
              <span>
                {post.likes.length} <span className="max-sm:hidden">Likes</span>
              </span>
            </span>
            <span className="flex gap-2 items-center btn-hover-style">
              <Image
                src="/images/icons/comment.svg"
                width={18}
                height={18}
                alt="comment"
              />
              <span>
                {post.comments.length}{" "}
                <span className="max-sm:hidden">Comments</span>
              </span>
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span>{post.readTime} read</span>
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
