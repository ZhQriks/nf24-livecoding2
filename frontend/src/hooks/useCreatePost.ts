import { axiosInstance } from "@/lib/axiosInstance";
import { Blog } from "@/types/blog";
import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";

interface BlogData {
  title: string;
  author: string;
  content: string;
}

const createBlog = async (blogData: BlogData): Promise<Blog> => {
    const res = await axiosInstance.post<Blog>('blog/create', blogData);
    return res.data;
}

const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation<Blog, Error, BlogData>({
      mutationFn: createBlog,
      onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['blogs']});
      },
  });
}

export { useCreatePost };