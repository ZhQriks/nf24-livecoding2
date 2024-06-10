import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { Blog } from "@/types/blog";

interface BlogProps {
  title: string;
  author: string;
  content: string;
}

export default function BlogCard({ title, author, content }: BlogProps) {
  return (
    <Card className="w-full">
      <div className="grid gap-4">
        <div>
          <Link
            href="#"
            className="block transition-all hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <Skeleton className="h-[300px] rounded-t-lg object-cover" />
          </Link>
        </div>
        <div className="space-y-2 px-4 pb-4">
          <Link
            href="#"
            className="block transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="h-8 w-8 border rounded-full flex justify-center items-center">
              <div>CN</div>
            </div>
            <div>
              <span className="font-medium">{author}</span>
              <span> · </span>
              <span>{content}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
