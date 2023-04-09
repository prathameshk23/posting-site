"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MyPost } from "../types/MyPost";
import EditPost from "./EditPost";

const fetchMyPost = async () => {
  const response = await axios.get("/api/posts/myPost");

  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<MyPost>({
    queryFn: fetchMyPost,
    queryKey: ["my-posts"],
  });
  if (isLoading) return <h1>Posts are loading....</h1>;
  return (
    <div>
      {data?.Post?.map((post) => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.Comment}
        />
      ))}
    </div>
  );
}
