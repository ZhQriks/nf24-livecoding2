import { CreateBlog } from "@/components/create-blog";
import { PostList } from "@/components/post-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-20 py-4">
      <div className="flex justify-end">
        <CreateBlog />
      </div>
      <PostList />
    </div>
  );
}
