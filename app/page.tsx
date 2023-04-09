"use client";
import axios from "axios";
import AddPost from "./components/AddPost";
import { useQuery } from "@tanstack/react-query";
import Post from "./components/Post";

const allPoasts = async () => {
  const responce = await axios.get("/api/posts/getPost");
  return responce.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPoasts,
    queryKey: ["posts"],
  });

  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
