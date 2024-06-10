"use client";

import BlogCard from "./blog-сard";
import { Skeleton } from "./ui/skeleton";
import usePosts from "@/hooks/usePosts";

export const PostList = () => {
  const { data, isLoading, isSuccess } = usePosts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="mx-auto w-full h-[400px] my-10" />
        <Skeleton className="mx-auto w-full h-[400px] my-10" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 gap-4">
      {isSuccess &&
        data.map((post) => {
          return (
            <BlogCard
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
            />
          );
        })}
    </div>
  );
};
