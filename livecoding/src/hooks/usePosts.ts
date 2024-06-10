import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { Blog } from "@/types/blog";

const fetchBlog = async (): Promise<Blog[]> => {
  const res = await axiosInstance.get("blog?limit=40");
  return res.data;
};

const usePosts = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlog,
  });
};

export default usePosts;